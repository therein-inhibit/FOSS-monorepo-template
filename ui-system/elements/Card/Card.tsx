import type { JSX } from "solid-js";

import { Box } from "ui-system";

import style from "./card.module.css";

export type CardProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

export function Card({ children, class: klass = "", ...rest }: CardProps) {
  return <Box class={`${style.Card} ${klass} relative`}>{children}</Box>;
}
