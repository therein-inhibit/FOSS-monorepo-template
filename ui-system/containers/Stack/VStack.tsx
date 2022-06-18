import type { JSX } from "solid-js";
import type { ContainerProps, StackProps } from "ui-system/containers/types";

import { Box } from "ui-system";
import styles from "ui-system/containers/styles.module.css";

export function VStack({
  children,
  class: klass,
  wrap = true,
  reverse = false,
  ...rest
}: ContainerProps & StackProps): JSX.Element {
  let wrapStyle = wrap ? styles.StackWrap : "";
  let reverStyle = reverse ? styles.VStackReverse : styles.VStack;

  return (
    <Box class={`${wrapStyle} ${reverStyle} ${klass}`} {...rest}>
      {children}
    </Box>
  );
}
