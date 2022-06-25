import type { JSX } from "solid-js";

import styles from "./buttons.module.css";
import { Close as CloseIcon } from "ui-system/icons";

export function CloseButton({
  children,
  class: klass = "",
  ...rest
}: JSX.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button type="button" class={`${styles.CloseBtn} ${klass}`} {...rest}>
      <CloseIcon />
    </button>
  );
}
