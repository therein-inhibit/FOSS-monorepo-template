import type { JSX } from "solid-js";
import { Center, Box, VStack } from "ui-system";

import { Spinner as SpinnerIcon } from "ui-system/icons";

import styles from "./spinner.module.css";

export type SpinnerProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

export function Spinner({
  children,
  class: klass = "",
  ...rest
}: SpinnerProps): JSX.Element {
  return (
    <>
      <span class={styles.SpinnerWaveSlow}></span>
      <span class={styles.SpinnerWaveFast}></span>
      <Center class={`${styles.SpinnerBackground}`}>
        <SpinnerIcon class={styles.Spinner} />
      </Center>
    </>
  );
}
