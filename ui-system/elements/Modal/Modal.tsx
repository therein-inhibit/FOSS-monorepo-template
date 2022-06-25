import type { JSX } from "solid-js";
import { createSignal, createEffect } from "solid-js";

import { Overlay, Center, Box } from "ui-system";

export type ModalProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

let signal = createSignal(false);
let [_, openOverlay] = Overlay.signal;

let [modalState, setModalState] = signal;
export function Modal({ children, class: klass = "", ...rest }: ModalProps) {
  createEffect(() => {
    console.log("ssssss", modalState());
    // if (modalState()) {
    //   openOverlay(true);
    // }

    if (modalState() === false) {
      openOverlay(false);
    }
  });

  let openModal = () => modalState();

  console.log("AAAAAA", modalState());

  return openModal() ? (
    <Overlay>
      <Center class="h-full w-full">
        <Box class={`${klass}`}>{children}</Box>
      </Center>
    </Overlay>
  ) : (
    <></>
  );
}

Modal.signal = signal;
