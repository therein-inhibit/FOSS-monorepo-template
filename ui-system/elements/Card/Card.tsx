import type { JSX } from "solid-js";
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
