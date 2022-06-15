import type { JSX } from "solid-js";

export type ContainerProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

export type StackProps = ContainerProps & {
  reverse?: boolean;
  wrap?: boolean;
};
