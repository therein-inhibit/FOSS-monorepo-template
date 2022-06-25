import styles from "./icons.module.css";
import { IconProps } from "./types";

export function Spinner({ class: klass = "" }: IconProps) {
  return (
    <svg
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
    </svg>
  );
}
