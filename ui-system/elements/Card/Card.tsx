import { Accessor, createEffect, createSignal, JSX } from "solid-js";
import { splitProps } from "solid-js";

import type { CardProps } from "./types";

import { Box } from "ui-system";

import style from "./card.module.css";

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
    <Box class={`${style.HighRaisedCard} ${local.class}`} {...rest}>
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
