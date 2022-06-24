import { Center } from "ui-system";

import styles from "./loader.module.css";

export type LoaderProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

export function Loader({ children, class: klass = "", ...rest }: LoaderProps) {
  return (
    <Center class={`${styles.Card} h-[12rem] w-[12rem]`}>
      <span class={styles.CircleButtonAnimationSlow}></span>
      <span class={styles.CircleButtonAnimationFast}></span>
      <span
        class={`bg-app-gray-a0 h-8 w-8 fixed z-10 rounded-full ${styles.OscilateFast} `}
      ></span>
      <span
        class={`bg-app-gray-b0 h-8 w-8 fixed z-10 rounded-full ${styles.OscilateSlow} `}
      ></span>
      <span class={`${klass}`} {...rest}></span>
    </Center>
  );
}
