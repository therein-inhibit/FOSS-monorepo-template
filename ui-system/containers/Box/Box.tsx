import type { JSX } from "solid-js";

import styles from "ui-system/containers/styles.module.css";

import type { ContainerProps } from "ui-system/containers/types";

export function Box({
  children,
  class: klass = "",
  ...rest
}: JSX.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div class={`${styles.Box} ${klass}`} {...rest}>
      {children}
    </div>
  );
}
