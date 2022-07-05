import { JSX } from "solid-js";

export type CardProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;
