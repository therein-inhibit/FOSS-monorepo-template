import type { JSX } from "solid-js";

import { Center } from "ui-system";
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
  return (
    <Center class={`${klass} ${styles.Card}`} {...rest}>
      {children}
    </Center>
  );
}
