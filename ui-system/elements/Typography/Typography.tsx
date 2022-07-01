import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Box } from "ui-system";

import styles from "./Typography.module.css";

export function Text(props: JSX.HTMLAttributes<HTMLDivElement>): JSX.Element {
  let [local, rest] = splitProps(props, ["children", "class"]);
  return (
    <Box class={`${styles.NormalText} ${local.class}`} {...rest}>
      {local.children}
    </Box>
  );
}
