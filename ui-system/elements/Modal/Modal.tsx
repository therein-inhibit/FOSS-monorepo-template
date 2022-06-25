import type { JSX } from "solid-js";

import { Overlay, Center, Box } from "ui-system";

export type ModalProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

export function Modal({ children, class: klass = "", ...rest }: ModalProps) {
  let [_, set] = Overlay.signal;
  set(true);
  return (
    <Overlay>
      <Center class="h-full w-full">
        <Box class={`${klass}`}>{children}</Box>
      </Center>
    </Overlay>
  );
}
