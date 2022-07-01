import type { JSX } from "solid-js";
import { createSignal, createEffect, onCleanup } from "solid-js";
import { Portal } from "solid-js/web";

import { Box } from "ui-system";
import styles from "./overlay.module.css";

// TODO: make it work on iOS
const signal = createSignal(false);
export function Overlay({
  children,
  class: klass = "",
  ...rest
}: JSX.HTMLAttributes<HTMLDivElement>) {
  let [showOverlay, setShowOverlay] = signal;

  createEffect(() => {
    if (showOverlay()) {
      // document.body.style.top = `-${window.scrollY}px`;
      document.body.style.overflow = "hidden";
      // document.body.style.position = "fixed";
    }

    if (showOverlay() === false) {
      document.body.style.overflow = "";
      // document.body.style.position = "";
      // document.body.style.top = "";
    }
  });

  onCleanup(() => {
    setShowOverlay(false);
    document.body.style.overflow = "";
    // document.body.style.position = "";
    // document.body.style.top = "";
    // document.body.style.position = "";
  });

  return (
    <Portal>
      <Box class={`${styles.Card}`}>{children}</Box>
    </Portal>
  );
}

Overlay.signal = signal;
