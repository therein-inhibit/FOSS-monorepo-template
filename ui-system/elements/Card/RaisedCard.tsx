import { Accessor, createEffect, createSignal, JSX } from "solid-js";
import { splitProps } from "solid-js";

import type { CardProps } from "./types";

import style from "./card.module.css";

export function RaisedCard2(props: CardProps & { deep?: boolean }) {
  let borderWidth = 3;

  let [childHeight, setChildHeight] = createSignal("100%");
  let [childWidth, setChildWidth] = createSignal("100%");
  let [gradientAngle, setGradientAngle] = createSignal(135);
  let [fixConstant, setFixConstant] = createSignal(0);

  let Wrapper = createShallowCardContainer(
    props,
    childHeight,
    childWidth,
    gradientAngle,
    fixConstant
  );

  createEffect(() => {
    setFixConstant(
      computeFix(Wrapper.clientHeight, Wrapper.clientWidth, borderWidth)
    );

    setGradientAngle(
      computeAngleInDegrees(
        Wrapper.clientHeight - borderWidth,
        Wrapper.clientWidth - borderWidth,
        fixConstant()
      )
    );
    // setting the inner div height 2px smaller but in REM
    // if user changes the default font size this will scale
    setChildHeight(`${fromPXtoREM(Wrapper.clientHeight - borderWidth)}`);
    setChildWidth(`${fromPXtoREM(Wrapper.clientWidth - borderWidth)}`);
  });

  return Wrapper;
}

function createShallowCardContainer(
  props: CardProps,
  height: Accessor<string>,
  width: Accessor<string>,
  gradientAngle: Accessor<number>,
  fixConstant: Accessor<number>
): HTMLDivElement {
  let [local, rest] = splitProps(props, ["class", "children", "style", "deep"]);

  return (
    <div
      class={`${style.CardShallowGradient} ${local.class || ""} `}
      style={{
        ...(local.style as JSX.CSSProperties),
        background: createShallowBackgroundGradient(gradientAngle, fixConstant),
      }}
      {...rest}
    >
      <div
        class={`${local.deep ? style.HighRaisedCard : style.RaisedCard}`}
        style={{
          height: height(),
          width: width(),
          "z-index": 1,
        }}
      >
        {local.children}
      </div>
    </div>
  ) as HTMLDivElement;
}

function createShallowBackgroundGradient(
  angle: Accessor<number>,
  fix: Accessor<number>
) {
  return `linear-gradient(
    ${angle()}deg,
    var(--app-gray-255-90) 0%,
    var(--app-gray-255) ${computeGradientFix(fix)}%,
    var(--app-gray-195) 53%,
    var(--app-gray-195-90) 100%
  `;
}

function fromPXtoREM(px: number): string {
  return `${px * 0.0625}rem`;
}

// this number 45 and power of 2 was decied on try and error
// it gives a good border gradient that keeps the neumorphic impression
// withou using shadows
function computeGradientFix(fix: Accessor<number>) {
  return 50 - Math.atan(fix() ** 2);
}

// this computes a const whihc is use to fix the math.
// this fix is proportional to heigh/width and the border
function computeFix(height: number, width: number, border: number) {
  let h = height - border;
  let w = width - border;

  return height > width ? h / w : w / h;
}

function computeAngleInDegrees(
  height: number,
  width: number,
  fix: number
): number {
  if (height > width) {
    return Math.floor(
      (Math.atan2(width * fix, height * fix) * 180) / Math.PI + 90
    );
  }

  return Math.ceil(
    (Math.atan2(width * fix, height * fix) * 180) / Math.PI + 90
  );
}

function log<T>(msg: string, arg: T): T {
  console.log(msg, arg);
  return arg;
}

// let w = 64;
// let h = 32;
// console.log(calcAngleDegrees(w, h) + 90);
