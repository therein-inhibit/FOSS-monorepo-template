import { Accessor, createEffect, createSignal, JSX, onMount } from "solid-js";
import { splitProps } from "solid-js";

import type { CardProps } from "./types";

import { Box } from "ui-system";

import style from "./card.module.css";

export function RaisedCard(props: CardProps & { raised?: boolean }) {
  let borderWidth = 3;

  let [childHeight, setChildHeight] = createSignal("100%");
  let [childWidth, setChildWidth] = createSignal("100%");
  let [gradientAngle, setGradientAngle] = createSignal(135);
  let [fixConstant, setFixConstant] = createSignal(0);

  let Container = createRaisedCardContainer(
    props,
    childHeight,
    childWidth,
    gradientAngle,
    fixConstant
  );

  onMount(() => {
    Container.style.setProperty(
      "height",
      fromPXtoREM(Container.clientHeight + borderWidth)
    );
    Container.style.setProperty(
      "width",
      fromPXtoREM(Container.clientWidth + borderWidth)
    );
  });

  createEffect(() => {
    setFixConstant(
      computeFix(Container.clientHeight, Container.clientWidth, borderWidth)
    );

    let height = Container.clientHeight - borderWidth;
    let width = Container.clientWidth - borderWidth;

    setGradientAngle(computeAngleInDegrees(height, width, fixConstant()));

    // let height = fromPXtoREM(Container.clientHeight - borderWidth);
    // let width = fromPXtoREM(width);

    // console.log(
    //   "___!!!___",
    //   [childHeight(), height, fromPXtoREM(Container.clientHeight)],
    //   [childWidth(), width, fromPXtoREM(Container.clientWidth)]
    // );

    // setting the inner div height 2px smaller but in REM
    // if user changes the default font size this will scale
    setChildHeight(fromPXtoREM(height));
    setChildWidth(fromPXtoREM(width));
  });

  // return Container;

  return <Box class={props.class}>{Container}</Box>;
}

function createRaisedCardContainer(
  props: CardProps,
  height: Accessor<string>,
  width: Accessor<string>,
  gradientAngle: Accessor<number>,
  fixConstant: Accessor<number>
): HTMLDivElement {
  let [local, rest] = splitProps(props, [
    "class",
    "children",
    "style",
    "raised",
  ]);

  return (
    <div
      class={`${style.CardRaisedGradient} h-full w-full`}
      style={{
        ...(local.style as JSX.CSSProperties),
        background: createRaisedBackgroundGradient(gradientAngle, fixConstant),
      }}
      {...rest}
    >
      <div
        class={`${local.raised ? style.HighRaisedCard : style.RaisedCard}`}
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

function createRaisedBackgroundGradient(
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
