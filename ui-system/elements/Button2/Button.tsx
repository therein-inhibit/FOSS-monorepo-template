import type { JSX } from "solid-js";
import {
  Accessor,
  createEffect,
  createSignal,
  onMount,
  onCleanup,
} from "solid-js";

import styles from "./Button.module.css";
import { Center, Box, Card } from "ui-system";

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
  let [isAbove, setIsAbove] = createSignal(true);

  // must detect mouse up to clear the flat state
  // let mouseUpHandler = () => setPressedDown(false);
  // document.addEventListener("mouseup", mouseUpHandler);

  // onCleanup(() => {
  //   document.removeEventListener("mouseup", mouseUpHandler);
  // });

  return (
    <Card class={klass} above={isAbove}>
      <Center class={styles.Full}>
        <button
          class={styles.Full}
          onClick={(evt) => {
            // evt.stopPropagation();
            setIsAbove((v) => !v);
            (onClick as JSX.EventHandler<HTMLButtonElement, MouseEvent>)(evt);
          }}
        >
          {children}
        </button>
      </Center>
    </Card>
  );
  // return (
  //   <button
  //     type="button"
  //     class={`${buttonBorder()} ${klass}`}
  //     onClick={(evt) => {
  // setPressedDown((v) => !v);
  // (onClick as JSX.EventHandler<HTMLButtonElement, MouseEvent>)(evt);
  //     }}
  //   >
  //     <Center class={styles.Container}>
  //       <span class={content()}>{children}</span>
  //     </Center>
  //     <span class={topCorner()}></span>
  //     <span class={bottonCorner()}></span>
  //   </button>
  // );
};
