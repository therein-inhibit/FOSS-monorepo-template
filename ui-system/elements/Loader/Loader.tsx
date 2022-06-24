import { Center, Box, VStack } from "ui-system";

import styles from "./loader.module.css";

export type LoaderProps = {
  children?: JSX.Element;
  class?: string;
} & Record<string, unknown>;

export function Loader({ children, class: klass = "", ...rest }: LoaderProps) {
  return (
    <Center class={`${styles.Card} h-[24rem] w-[24rem]`}>
      <VStack class="">
        <Center>
          {/* <div class={`${styles.Ring1}`}></div>
          <div class={`${styles.Ring2}`}></div>
          <div class={`${styles.Ring3}`}></div>
          <div class={`${styles.Ring4}`}></div> */}
          <span class={styles.CircleButtonAnimationSlow}></span>
          <span class={styles.CircleButtonAnimationNormal}></span>
          {/* <span class={styles.CircleButtonAnimationFast}></span> */}
          {/* <Center class={`${styles.Pulse} ${styles.CircleButtonRaised}`}> */}
          <Center class={`${styles.CircleButtonRaised}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={`h-10 w-10 rounded-full ${styles.Spin} `}
              aria-hidden="true"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                // stroke="currentColor"
                stroke="var(--app-gray-110)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"
              />
            </svg>

            {/* <Center> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              class={`h-10 w-10 rounded-full ${styles.Spin} `}
              aria-hidden="true"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 48 48"
            >
              <mask id="svgIDa">
                <g
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path
                    fill="#fff"
                    stroke="var(--app-gray-235)"
                    d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                  />
                  <path
                    stroke="#000"
                    d="M24 12v3m8.485.515l-2.121 2.121M36 24h-3m-.515 8.485l-2.121-2.121M24 36v-3m-8.485-.515l2.121-2.121M12 24h3m.515-8.485l2.121 2.121"
                  />
                </g>
              </mask>
              <path
                fill="var(--app-gray-100)"
                d="M0 0h48v48H0z"
                mask="url(#svgIDa)"
              />
            </svg> */}

            {/* <svg
              class={`h-10 w-10 rounded-full ${styles.Spin} `}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                // stroke="rgba(110,110,110, 1)"
                stroke="var(--app-gray-150)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Zm0-32v3m8.485.515l-2.121 2.121M36 24h-3m-.515 8.485l-2.121-2.121M24 36v-3m-8.485-.515l2.121-2.121M12 24h3m.515-8.485l2.121 2.121"
              />
            </svg> */}
            {/* </Center> */}
          </Center>
        </Center>
        {/* <span
        class={` h-8 w-8 fixed rounded-full ${styles.OscilateFast} `}
      ></span> */}
        {/* <span
        class={`h-8 w-8 fixed z-10 rounded-full ${styles.OscilateSlow} `}
      ></span> */}
        {/* <Box class="h-[8rem]"></Box> */}
        {/* TODO: make text bold */}
        {/* <Box class={`${klass} ${styles.Bounce} mb-auto text-center`} {...rest}>
          LOADING...
        </Box> */}
      </VStack>
    </Center>
  );
}
