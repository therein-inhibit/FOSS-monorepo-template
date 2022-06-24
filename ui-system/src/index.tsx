/* @refresh reload */
import "styles";
import { render } from "solid-js/web";

import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);

// import { range } from "lib";

// let cache = [];

// for (let i of range(0, 255, 5)) {
//   for (let j of range(0, 100, 5)) {
//     let color = String(i);
//     let opacity = String(j);

//     if (i < 10) {
//       color = `00${i}`;
//     } else if (i >= 10 && i < 100) {
//       color = `0${i}`;
//     }

//     if (j < 10) {
//       opacity = `00${j}`;
//     } else if (j >= 10 && j < 100) {
//       opacity = `0${j}`;
//     }

//     // console.log(
//     //   `"${color}-${opacity}": "rgba(${color},${color},${color}, ${j / 100})"`
//     // );
//     if (j === 100) {
//       cache.push(`--app-gray-${color}: rgba(${i},${i},${i}, ${j / 100})`);
//     } else {
//       cache.push(
//         `--app-gray-${color}-${opacity}: rgba(${i},${i},${i}, ${j / 100})`
//       );
//     }
//   }
// }

// console.log(cache.join(";\n"));
