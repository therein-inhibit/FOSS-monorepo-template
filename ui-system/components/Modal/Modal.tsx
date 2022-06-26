import type { JSX } from "solid-js";
import { createSignal, createEffect, onCleanup } from "solid-js";

import { Overlay, Center, Box, VStack, CloseButton } from "ui-system";

import styles from "./modal.module.css";

export type ModalProps = {
  // children?: JSX.Element;
  class?: string;
} & {
  hasCloseButton?: boolean;
  header?: JSX.Element;
  body?: JSX.Element;
  footer?: JSX.Element;
} & Record<string, unknown>;

// let signal = createSignal(false);
let signal = createSignal(true);
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
          <Center class="h-full w-full" {...rest}>
            <Box class={` ${styles.ModalContainer} ${klass}  flex-row-reverse`}>
              <Box class="fixed app-li">
                <CloseButton
                  class="z-10 m-3 app-light-raised"
                  onClick={() => {
                    let [_, set] = Modal.signal;
                    set(false);
                  }}
                />
              </Box>
              <VStack class={`${styles.ModalContent}`}>
                {header}

                {/* <div class="bg-app-gray-125 opacity-50 p-2 w-full fixed"></div> */}
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
      {/* <Box class="w-full top-8 left-0 backdrop-blur-[5px] fixed h-2 bg-app-gray-200-090"></Box>
      <Box class="w-full top-10 left-0 backdrop-blur-[4px] fixed h-2 bg-app-gray-200-080"></Box>
      <Box class="w-full top-12 left-0 backdrop-blur-[3px] fixed h-2 bg-app-gray-200-070"></Box>
      <Box class="w-full top-14 left-0 backdrop-blur-[2px] fixed h-2 bg-app-gray-200-060"></Box>
      <Box class="w-full top-16 left-0 backdrop-blur-[1px] fixed h-2 bg-app-gray-200-050"></Box> */}
      {/* <Center class="absolute w-full h-4">
        <Box class={`${styles.HOpacityContainer}`}></Box>
      </Center>

      <Center class="absolute w-full top-0 h-4">
        <Box class={`${styles.VOpacityContainerRight}`}></Box>
      </Center> */}

      <div class="p-4">{children}</div>
      {/*
      <Center class="absolute w-full bottom-0 h-4">
        <Box class={`${styles.VOpacityContainerLeft}`}></Box>
      </Center>

      <Center class="absolute w-full bottom-6 h-4">
        <Box class={`${styles.HOpacityContainer}`}></Box>
      </Center> */}
    </Box>
  );
}
