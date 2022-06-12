import type { JSX } from "solid-js";

import styles from "./styles.module.css";

import type { ContainerProps } from "./types";

export default ({
  children,
  class: klass,
  ...rest
}: ContainerProps): JSX.Element => {
  return (
    <div class={`${styles.Box} ${klass}`} {...rest}>
      {children}
    </div>
  );
};
