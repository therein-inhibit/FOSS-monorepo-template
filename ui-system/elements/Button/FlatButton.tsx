import type { JSX } from "solid-js";

import styles from "ui-system/elements/Button/buttons.module.css";

export function FlatButton({
  children,
  class: klass = "",
  ...rest
}: JSX.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button type="button" class={`${styles.FlattenButton} ${klass}`} {...rest}>
      {children}
    </button>
  );
}
