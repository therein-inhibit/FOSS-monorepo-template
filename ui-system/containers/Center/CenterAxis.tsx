import type { JSX } from "solid-js";

import { Box } from "ui-system";
import styles from "ui-system/containers/styles.module.css";

export function CenterAxis({
  children,
  class: klass = "",
  ...rest
}: JSX.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <Box class={`${styles.AxisCenter} ${klass}`} {...rest}>
      {children}
    </Box>
  );
}
