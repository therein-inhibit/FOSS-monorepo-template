import type { JSX } from "solid-js";
import { Portal } from "solid-js/web";

import { Center, Box } from "ui-system";
import styles from "./overlay.module.css";

export type OverlayProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

export function Overlay({
  children,
  class: klass = "",
  ...rest
}: OverlayProps) {
  document.body.style.overflow = "hidden";

  return (
    // <Portal useShadow={true}>
    <Portal>
      {/* <Center class={`${klass} ${styles.Card}  z-10 top-0`} {...rest}> */}
      <Box class={`${styles.Card}`}>{children}</Box>
      {/* </Center> */}
    </Portal>
  );
}
