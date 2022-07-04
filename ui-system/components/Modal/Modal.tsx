import type { JSX } from "solid-js";
import { createSignal, createEffect, onCleanup } from "solid-js";

import { Overlay, Center, Box, VStack, CloseButton } from "ui-system";

import styles from "./modal.module.css";

// TODO: make it work on iOS

export type ModalProps = {
  // children?: JSX.Element;
  class?: string;
} & {
  hasCloseButton?: boolean;
  header?: JSX.Element;
  body?: JSX.Element;
  footer?: JSX.Element;
} & Record<string, unknown>;

let signal = createSignal(false);
// let signal = createSignal(true);
let [_, addOverlay] = Overlay.signal;

let [modalState, setModalState] = signal;

function resetState() {
  addOverlay(false);
  setModalState(false);
}
export function Modal({
  // children,
  class: klass = "",
  hasCloseButton = false,
  header,
  footer,
  body,
  ...rest
}: ModalProps) {
  let closeModal = () => {
    let [_, set] = Modal.signal;
    set(false);
  };

  createEffect(() => {
    if (modalState()) {
      addOverlay(true);
    }

    if (modalState() === false) {
      addOverlay(false);
    }
  });

  onCleanup(() => {
    resetState();
  });

  if (header == null && footer == null && body == null) {
    return null;
  }

  return (
    <>
      {modalState() ? (
        <Overlay>
          <Center class="h-full w-full" {...rest} onClick={closeModal}>
            <Box
              class={` ${styles.ModalContainer} ${klass}  flex-row-reverse`}
              onClick={(evt) => evt.stopPropagation()}
            >
              <Box class="fixed app-li">
                <CloseButton
                  class={`${styles.CloseButton}`}
                  onClick={closeModal}
                />
              </Box>
              <VStack class={`${styles.ModalContent}`}>
                {header}

                <Body>{body}</Body>
                {footer}
              </VStack>
            </Box>
          </Center>
        </Overlay>
      ) : null}
    </>
  );
}

Modal.signal = signal;

function Body({ children, class: klass = "", ...rest }) {
  // must be a div to break the parent flexbox ans keep the childrem flexboxx intact
  return (
    <Box>
      <div class="p-4">{children}</div>
    </Box>
  );
}
