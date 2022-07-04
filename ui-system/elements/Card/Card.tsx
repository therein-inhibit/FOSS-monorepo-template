import { createEffect, createSignal, JSX } from "solid-js";
import { splitProps } from "solid-js";

import { Box } from "ui-system";

import style from "./card.module.css";

export type CardProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

export function FloatCard(props: CardProps) {
  let [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <Box class={`${style.FloatCard} ${local.class}`} {...rest}>
      {local.children}
    </Box>
  );
}

export function RaisedCard(props: CardProps) {
  let [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <Box class={`${style.RaisedCard} ${local.class}`} {...rest}>
      {local.children}
    </Box>
  );
}

export function ShallowCard(props: CardProps) {
  let [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <Box class={`${style.ShallowCard} ${local.class} `} {...rest}>
      {local.children}
    </Box>
  );
}

export function CardRaisedGradient(props: CardProps) {
  let [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <Box class={`${style.CardRaisedGradient} ${local.class} `} {...rest}>
      {local.children}
    </Box>
  );
}

// export function CardShallowGradient(props: CardProps) {
//   let [local, rest] = splitProps(props, ["class", "children"]);
//   return (
//     <Box class={`${style.CardShallowGradient} ${local.class} `} {...rest}>
//       {local.children}
//     </Box>
//   );
// }

export function CardShallowGradient(props: CardProps) {
  let [local, rest] = splitProps(props, ["class", "children", "style"]);
  let borderWidth = 3;

  let [childHeight, setChildHeight] = createSignal("100%");
  let [childWidth, setChildWidth] = createSignal("100%");
  let [angle, setAngle] = createSignal(135);
  let [fix, setFix] = createSignal(0);

  let Wrapper = (
    <div
      class={`${style.CardShallowGradient} ${local.class || ""} `}
      style={{
        ...(local.style as JSX.CSSProperties),
        background: `linear-gradient(
        ${angle()}deg,
        var(--app-gray-195-90) 0%,
        var(--app-gray-195) ${45 - Math.atan(fix() ** 2)}%,
        var(--app-gray-255) 50%,
        var(--app-gray-255-90) 100%
      `,
      }}
      {...rest}
    >
      <div
        class={`${style.ShallowCard}`}
        style={{
          height: childHeight(),
          width: childWidth(),
          "z-index": 1,
        }}
      >
        {local.children}
      </div>
    </div>
  ) as HTMLDivElement;

  createEffect(() => {
    setFix(
      Wrapper.clientHeight > Wrapper.clientWidth
        ? (Wrapper.clientHeight - borderWidth) /
            (Wrapper.clientWidth - borderWidth)
        : (Wrapper.clientWidth - borderWidth) /
            (Wrapper.clientHeight - borderWidth)
    );

    setAngle(
      calcAngleDegrees(
        Wrapper.clientHeight - borderWidth,
        Wrapper.clientWidth - borderWidth,
        fix()
      )
    );
    // setting the inner div height 2px smaller but in REM
    // if user changes the default font size this will scale
    setChildHeight(`${(Wrapper.clientHeight - borderWidth) * 0.0625}rem`);
    setChildWidth(`${(Wrapper.clientWidth - borderWidth) * 0.0625}rem`);

    // console.log(
    //   "----",
    //   // `per: ${135 / angle()}`,
    //   `fix: ${Math.atan(fix())}`,
    //   `angle: ${angle()}, height: ${childHeight()}, width: ${childWidth()}`
    // );
  });

  return Wrapper;
}

function fromPXtoREM(px: number): string {
  return `${px * 0.0625}rem`;
}

function calcAngleDegrees(h: number, w: number, fix: number): number {
  if (h > w) {
    return Math.floor((Math.atan2(w * fix, h * fix) * 180) / Math.PI + 90);
  }

  return Math.ceil((Math.atan2(w * fix, h * fix) * 180) / Math.PI + 90);
}

// let w = 64;
// let h = 32;
// console.log(calcAngleDegrees(w, h) + 90);
