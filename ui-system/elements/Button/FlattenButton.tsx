import type { JSX } from "solid-js";

import styles from "ui-system/elements/Button/buttons.module.css";

export function FlatButton({
  children,
  class: klass = "",
  onClick,
  ...rest
}: JSX.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button
      type="button"
      class={`${styles.FlattenButton} ${klass} h-fit w-fit p-3`}
      onFocus={() => {
        console.log("focus");
      }}
      onClick={(evt) => {
        if (typeof onClick === "function") {
          onClick(evt);
        }
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
