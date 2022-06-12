import type { JSX } from "solid-js";
import Box from "./Box";

type CenterProps = {
  children?: JSX.Element;
  class?: string;
};

export default function Center({
  children,
  class: klass,
  ...rest
}: CenterProps): JSX.Element {
  return (
    <Box class={`${klass} justify-center items-center`} {...rest}>
      {children}
    </Box>
  );
}
