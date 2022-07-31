import type { JSX } from "solid-js";
import {
  Accessor,
  createEffect,
  createSignal,
  onMount,
  onCleanup,
} from "solid-js";

import {
  FlatCard,
  AboveTopRightCardCorner,
  BelowTopRightCardCorner,
  AboveBottomLeftCardCorner,
  BelowBottomLeftCardCorner,
  AboveCardBorder,
  BelowCardBorder,
  CardContentAbove,
  CardContentBelow,
  Ripple,
  Container,
} from "./Card.module.css";
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
      ? ""
      : above()
      ? AboveTopRightCardCorner
      : BelowTopRightCardCorner;

  let bottomCorner = () =>
    above() === null
      ? ""
      : above()
      ? AboveBottomLeftCardCorner
      : BelowBottomLeftCardCorner;

  let cardBorder = () =>
    above() === null ? FlatCard : above() ? AboveCardBorder : BelowCardBorder;

  let content = () =>
    above() === null ? "" : above() ? CardContentAbove : CardContentBelow;

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
        <span class={` ${Ripple}`}>{children}</span>
      ) : (
        <>
          <Center class={Container}>
            <span class={content()}>{children}</span>
          </Center>
          <span class={topCorner()}></span>
          <span class={bottomCorner()}></span>
        </>
      )}
    </div>
  );
};
