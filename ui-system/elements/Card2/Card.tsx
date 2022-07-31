import type { JSX } from "solid-js";
import {
  Accessor,
  createEffect,
  createSignal,
  onMount,
  onCleanup,
} from "solid-js";

import styles from "./Card.module.css";
import { Center, Box } from "ui-system";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLDivElement> & {
  above?: () => boolean | null;
};

const noop: JSX.EventHandler<HTMLDivElement, MouseEvent> = (
  evt: MouseEvent & {
    currentTarget: HTMLDivElement;
    target: Element;
  }
) => {};

export const Card = ({
  children,
  class: klass,
  onClick = noop,
  above = () => null,
  onMouseDown = noop,
  onMouseOut = noop,
  onMouseEnter = noop,
}: ButtonProps): JSX.Element => {
  let topCorner = () =>
    above() === null
      ? styles.FlatCard
      : above()
      ? styles.AboveTopRightCorner
      : styles.BelowTopRightCorner;

  let bottomCorner = () =>
    above() === null
      ? styles.FlatCard
      : above()
      ? styles.AboveBottomLeftCorner
      : styles.BelowBottomLeftCorner;

  let cardBorder = () =>
    above() === null
      ? styles.FlatCard
      : above()
      ? styles.AboveCardBorder
      : styles.BelowCardBorder;

  let content = () =>
    above() === null
      ? styles.FlatCard
      : above()
      ? styles.AboveContent
      : styles.BellowContent;

  // must detect mouse up to clear the flat state
  // let mouseUpHandler = () => setPressedDown(false);
  // document.addEventListener("mouseup", mouseUpHandler);

  // onCleanup(() => {
  //   document.removeEventListener("mouseup", mouseUpHandler);
  // });

  return (
    <div
      class={`${cardBorder()} ${klass}`}
      onClick={(evt) => {
        evt.stopPropagation();
        (onClick as JSX.EventHandler<HTMLDivElement, MouseEvent>)(evt);
      }}
    >
      {above() === null ? (
        <span class={` ${styles.Ripple}`}>{children}</span>
      ) : (
        <>
          <Center class={styles.Container}>
            <span class={content()}>{children}</span>
          </Center>
          <span class={topCorner()}></span>
          <span class={bottomCorner()}></span>
        </>
      )}
    </div>
  );
};
