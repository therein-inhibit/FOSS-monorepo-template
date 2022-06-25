import type { JSX } from "solid-js";
import { createSignal, createEffect } from "solid-js";
import { Portal } from "solid-js/web";

import { Box } from "ui-system";
import styles from "./overlay.module.css";

export type OverlayProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

const signal = createSignal(false);
export function Overlay({
  children,
  class: klass = "",
  ...rest
}: OverlayProps) {
  let [overActive] = signal;

  createEffect(() => {
    if (overActive()) {
      console.log("scroll hidden");
      document.body.style.overflow = "hidden";
    }

    if (overActive() === false) {
      console.log("scroll not hidden");
      document.body.style.overflow = "";
    }
  });

  return (
    <Portal>
      <Box class={`${styles.Card}`}>{children}</Box>
    </Portal>
  );
}

Overlay.signal = signal;
