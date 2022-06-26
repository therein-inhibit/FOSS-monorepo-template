/* @refresh reload */
// import "../gray-colors.css";
import "styles";
import { render } from "solid-js/web";

import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);

// import { range } from "lib";

// function generateGrayScale(isVar = false) {
//   let cache = [];

//   for (let i of range(0, 255, 5)) {
//     for (let j of range(0, 100, 5)) {
//       let color = String(i);
//       let opacity = String(j);

//       if (i < 10) {
//         color = `00${i}`;
//       } else if (i >= 10 && i < 100) {
//         color = `0${i}`;
//       }

//       if (j < 10) {
//         opacity = `0${j}`;
//       }

//       // console.log(
//       //   `"${color}-${opacity}": "rgba(${color},${color},${color}, ${j / 100})"`
//       // );
//       if (j === 100) {
//         let str =
//           isVar === true
//             ? `--app-gray-${color}: rgba(${i},${i},${i}, ${j / 100})`
//             : `"${color}": "rgba(${i},${i},${i}, ${j / 100})"`;

//         cache.push(str);
//       } else {
//         let str =
//           isVar === true
//             ? `--app-gray-${color}-${opacity}: rgba(${i},${i},${i}, ${j / 100})`
//             : `"${color}-${opacity}": "rgba(${i},${i},${i}, ${j / 100})"`;

//         cache.push(str);
//       }
//     }
//   }

//   let out = "";
//   if (isVar) {
//     out = cache.join(";\n");
//   } else {
//     out = cache.join(",\n");
//   }

//   return out;
// }

// let str = generateGrayScale(true);
// console.log(str);
