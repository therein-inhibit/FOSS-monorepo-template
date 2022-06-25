import type { JSX } from "solid-js";
import { createSignal, createEffect, onCleanup } from "solid-js";

import { Overlay, Center, Box } from "ui-system";

export type ModalProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

let signal = createSignal(false);
let [_, addOverlay] = Overlay.signal;

let [modalState, setModalState] = signal;

function resetState() {
  addOverlay(false);
  setModalState(false);
}
export function Modal({ children, class: klass = "", ...rest }: ModalProps) {
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

  return (
    <>
      {modalState() ? (
        <Overlay>
          <Center class="h-full w-full">
            <Box class={`${klass} relaitve`}>{children}</Box>
          </Center>
        </Overlay>
      ) : null}
    </>
  );
}

Modal.signal = signal;
