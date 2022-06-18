import type { JSX } from "solid-js";
import type { ContainerProps } from "ui-system/containers/types";

import { Box } from "ui-system";
import styles from "ui-system/containers/styles.module.css";

export function AxisCenter({
  children,
  class: klass,
  ...rest
}: ContainerProps): JSX.Element {
  return (
    <Box class={`${styles.AxisCenter} ${klass}`} {...rest}>
      {children}
    </Box>
  );
}
