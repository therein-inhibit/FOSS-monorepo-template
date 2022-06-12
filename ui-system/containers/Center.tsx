import type { JSX } from "solid-js";
import type { ContainerProps } from "./types";

import { Box } from "ui-system";
import styles from "./styles.module.css";

export default function Center({
  children,
  class: klass,
  ...rest
}: ContainerProps): JSX.Element {
  return (
    <Box class={`${styles.Center} ${klass}`} {...rest}>
      {children}
    </Box>
  );
}
