import type { JSX } from "solid-js";
import { createSignal, onCleanup } from "solid-js";

import { Center } from "ui-system";

import styles from "ui-system/elements/Button/buttons.module.css";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export function CircleButton({
  children,
  class: klass = "",
  variante = "raised",
  onClick,
  onMouseDown,
  onMouseOut,
  onMouseEnter,
  ...rest
}: { variante?: "raised" | "flat" | "shallow" } & ButtonProps): JSX.Element {
  let [raised, setRaised] = createSignal(variante === "raised" ? true : false);
  let [flat, setFlat] = createSignal(variante === "flat" ? true : false);
  let [pressedDown, setPressedDown] = createSignal(false);

  let style = () => {
    if (flat()) {
      return styles.CircleButtonFlat;
    }

    return raised() ? styles.CircleButtonRaised : styles.CircleButtonShallow;
  };

  // must detect mouse up to clear the flat state
  let mouseUpHandler = () => setPressedDown(false);
  document.addEventListener("mouseup", mouseUpHandler);

  onCleanup(() => {
    document.removeEventListener("mouseup", mouseUpHandler);
  });

  return (
    <Center>
      <span class={styles.CircleButtonAnimationSlow}></span>
      <span class={styles.CircleButtonAnimationFast}></span>
      <button
        type="button"
        class={`${style()} ${klass}`}
        onMouseEnter={(evt) => {
          if (pressedDown()) {
            setFlat(true);
          }

          if (typeof onMouseEnter === "function") {
            onMouseEnter(evt);
          }
        }}
        onMouseDown={(evt) => {
          setFlat(true);
          setPressedDown(true);

          if (typeof onMouseDown === "function") {
            onMouseDown(evt);
          }
        }}
        onMouseOut={(evt) => {
          setFlat(false);

          if (typeof onMouseOut === "function") {
            onMouseOut(evt);
          }
        }}
        onClick={(evt) => {
          setRaised((v) => !v);
          setFlat(false);
          setPressedDown(false);

          if (typeof onClick === "function") {
            onClick(evt);
          }
        }}
        {...rest}
      >
        {children}
      </button>
    </Center>
  );
}
