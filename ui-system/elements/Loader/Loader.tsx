import { Center, Box, VStack } from "ui-system";

import styles from "./loader.module.css";

export type LoaderProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

export function Loader({ children, class: klass = "", ...rest }: LoaderProps) {
  return (
    <Center class={`${styles.Card} h-[22rem] w-[22rem]`}>
      <VStack class="">
        <Center class="mt-[8rem]">
          {/* <div class={`${styles.Ring1}`}></div>
          <div class={`${styles.Ring2}`}></div>
          <div class={`${styles.Ring3}`}></div>
          <div class={`${styles.Ring4}`}></div> */}
          <span class={styles.CircleButtonAnimationSlow}></span>
          <span class={styles.CircleButtonAnimationNormal}></span>
          {/* <span class={styles.CircleButtonAnimationFast}></span> */}
          <span class={styles.CircleButtonRaised}></span>
        </Center>
        {/* <span
        class={` h-8 w-8 fixed rounded-full ${styles.OscilateFast} `}
      ></span> */}
        {/* <span
        class={`h-8 w-8 fixed z-10 rounded-full ${styles.OscilateSlow} `}
      ></span> */}
        <Box class="h-[8rem]"></Box>
        {/* TODO: make text bold */}
        <Box class={`${klass} ${styles.Bounce} mb-auto text-center`} {...rest}>
          LOADING...
        </Box>
      </VStack>
    </Center>
  );
}
