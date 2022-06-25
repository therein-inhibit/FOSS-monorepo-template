import type { JSX } from "solid-js";
import { createSignal, createEffect, onCleanup } from "solid-js";
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
  let [showOverlay, setShowOverlay] = signal;

  createEffect(() => {
    if (showOverlay()) {
      document.body.style.overflow = "hidden";
    }

    if (showOverlay() === false) {
      document.body.style.overflow = "";
    }
  });

  onCleanup(() => {
    setShowOverlay(false);
    document.body.style.overflow = "";
  });

  return (
    <Portal>
      <Box class={`${styles.Card}`}>{children}</Box>
    </Portal>
  );
}

Overlay.signal = signal;
