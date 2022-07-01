import type { JSX } from "solid-js";
import { Center, Box, VStack } from "ui-system";

import { Spinner as SpinnerIcon } from "ui-system/icons";

import styles from "./spinner.module.css";

export function Spinner({
  children,
  class: klass = "",
  ...rest
}: JSX.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <Center class="relative">
      <span class={styles.SpinnerWaveSlow}></span>
      <span class={styles.SpinnerWaveFast}></span>
      <span class={styles.SpinnerWaveShort}></span>
      <Center class={`${styles.SpinnerBackground}`}>
        <SpinnerIcon class={styles.Spinner} />
      </Center>
    </Center>
  );
}
