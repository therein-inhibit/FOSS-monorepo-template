import type { JSX } from "solid-js";

type BoxProps = {
  children?: JSX.Element;
  class?: string;
};

export default ({ children, class: klass, ...rest }: BoxProps): JSX.Element => {
  return (
    <div class={`flex ${klass}`} {...rest}>
      {children}
    </div>
  );
};
