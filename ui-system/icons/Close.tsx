import styles from "./icons.module.css";
import { IconProps } from "./types";

export function Close({ class: klass = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={`${klass} rounded-full ${styles.IconSize} `}
      aria-hidden="true"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        stroke="var(--app-gray-110)"
        d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512L353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336L616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512L670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
      />
    </svg>
  );
}

{
  /* <svg
xmlns="http://www.w3.org/2000/svg"
class={`${klass} rounded-full ${styles.Spin} `}
aria-hidden="true"
width="1em"
height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 48 48"
>
<path
  fill="none"
  stroke="var(--app-gray-110)"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="4"
  d="M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"
/>
</svg> */
}
