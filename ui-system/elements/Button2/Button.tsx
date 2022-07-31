import type { JSX } from "solid-js";
import {
  Accessor,
  createEffect,
  createSignal,
  onMount,
  onCleanup,
} from "solid-js";

import styles from "./Button.module.css";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const noop: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (
  evt: MouseEvent & {
    currentTarget: HTMLButtonElement;
    target: Element;
  }
) => {};

export const Button = ({
  children,
  class: klass,
  onClick = noop,
  onMouseDown = noop,
  onMouseOut = noop,
  onMouseEnter = noop,
}: ButtonProps): JSX.Element => {
  let [pressedDown, setPressedDown] = createSignal(false);

  // must detect mouse up to clear the flat state
  // let mouseUpHandler = () => setPressedDown(false);
  // document.addEventListener("mouseup", mouseUpHandler);

  // onCleanup(() => {
  //   document.removeEventListener("mouseup", mouseUpHandler);
  // });

  return (
    <button
      type="button"
      class={`${
        pressedDown() ? styles.AboveButton : styles.BelowButton
      } ${klass}`}
      onClick={(evt) => {
        setPressedDown((v) => !v);
        (onClick as JSX.EventHandler<HTMLButtonElement, MouseEvent>)(evt);
      }}
    >
      {children}
    </button>
  );
};
