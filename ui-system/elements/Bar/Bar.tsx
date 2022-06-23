import type { JSX } from "solid-js";
import { createSignal, onCleanup } from "solid-js";

import { HStack } from "ui-system";

import styles from "ui-system/elements/Bar/bar.module.css";

export type BarProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

export function Bar({
  children,
  class: klass = "",
  ...rest
}: BarProps): JSX.Element {
  return (
    <HStack class={`${styles.BarRaised} ${klass}`} {...rest}>
      {children}
    </HStack>
  );
}
