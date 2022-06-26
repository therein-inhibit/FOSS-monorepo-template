import styles from "./icons.module.css";
import { IconProps } from "./types";

export function Spinner({ class: klass = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      class={`${klass} rounded-full ${styles.Spin} `}
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
        d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4"
      />
    </svg>
  );
}

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   aria-hidden="true"
//   class={`${klass} rounded-full ${styles.Spin} `}
//   width="1em"
//   height="1em"
//   preserveAspectRatio="xMidYMid meet"
//   viewBox="0 0 24 24"
// >
//   <path
//     fill="currentColor"
//     d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm8.66-10a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5A1 1 0 0 1 20.66 7zM7.67 14.5a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5a1 1 0 0 1 1.366.366zM20.66 17a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 0 1 1-1.732l2.598 1.5A1 1 0 0 1 20.66 17zM7.67 9.5a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 1 1 1-1.732l2.598 1.5A1 1 0 0 1 7.67 9.5z"
//   />
// </svg>
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   aria-hidden="true"
//   class={`${klass} rounded-full ${styles.Spin} `}
//   width="1em"
//   height="1em"
//   preserveAspectRatio="xMidYMid meet"
//   viewBox="0 0 20 20"
// >
//   <path
//     fill="currentColor"
//     fill-rule="evenodd"
//     d="M11 16a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm-6.259-3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm11.578.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4ZM18.5 9.319a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3ZM2.5 6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm15.286-.793a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM8 0a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm7.5 3a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Z"
//   />
// </svg>

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   class={`${klass} rounded-full ${styles.Spin} `}
//   aria-hidden="true"
//   width="1em"
//   height="1em"
//   preserveAspectRatio="xMidYMid meet"
//   viewBox="0 0 1024 1024"
// >
//   <path
//     fill="currentColor"
//     d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
//   />
// </svg>
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   class={`${klass} rounded-full ${styles.Spin} `}
//   aria-hidden="true"
//   width="1em"
//   height="1em"
//   preserveAspectRatio="xMidYMid meet"
//   viewBox="0 0 16 16"
// >
//   <path
//     fill="currentColor"
//     fill-rule="evenodd"
//     d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"
//     clip-rule="evenodd"
//   />
// </svg>
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   class={`${klass} rounded-full ${styles.Spin} `}
//   aria-hidden="true"
//   width="1em"
//   height="1em"
//   preserveAspectRatio="xMidYMid meet"
//   viewBox="0 0 48 48"
// >
//   <path
//     fill="none"
//     stroke="var(--app-gray-110)"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//     stroke-width="4"
//     d="M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"
//   />
// </svg>

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   aria-hidden="true"
//   width="1em"
//   height="1em"
//   preserveAspectRatio="xMidYMid meet"
//   viewBox="0 0 24 24"
// >
//   <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
//     <path
//       stroke-dasharray="60"
//       stroke-dashoffset="60"
//       stroke-opacity=".3"
//       d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
//     >
//     </path>
//     <path
//       stroke-dasharray="15"
//       stroke-dashoffset="15"
//       d="M12 3C16.9706 3 21 7.02944 21 12"
//     >
//       <animate
//         fill="freeze"
//         attributeName="stroke-dashoffset"
//         dur="0.3s"
//         values="15;0"
//       />
//       <animateTransform
//         attributeName="transform"
//         dur="1.5s"
//         repeatCount="indefinite"
//         type="rotate"
//         values="0 12 12;360 12 12"
//       />
//     </path>
//   </g>
// </svg>
