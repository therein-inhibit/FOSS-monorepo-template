import type { Component } from "solid-js";
import {
  Box,
  Button,
  Center,
  VStack,
  FlatButton,
  CircleButton,
  ButtonShallow,
  Bar,
  Loader,
} from "ui-system";
import { range } from "lib";
// import { Loader } from "../elements/Loader";

// TODO: create containers, elements, components and widget
const App: Component = () => {
  return (
    <Center class="h-screen w-screen bg-app-gray-e8 text-slate-600">
      <VStack class="gap-20 items-center">
        <Bar class="gap-10 px-4 py-2 rounded-md">
          <ButtonShallow
            class="py-1.5 px-3"
            variante="shallow"
            onClick={(evt) => {
              // console.log("shallow btn clicked", evt);
            }}
          >
            shallow
          </ButtonShallow>
          <FlatButton
            class="py-1.5 px-3"
            onClick={(evt) => {
              // console.log("flat btn clicked", evt);
            }}
          >
            flat 1
          </FlatButton>
          <FlatButton
            class="py-1.5 px-3"
            onClick={(evt) => {
              // console.log("flat btn clicked", evt);
            }}
          >
            flat 2
          </FlatButton>
        </Bar>

        <Button
          class="p-3"
          onClick={(evt) => {
            // console.log("raised btn clicked", evt);
          }}
        >
          raised
        </Button>

        <Box>
          <Button class="fixed h-16 w-16 p-[100px]">Back</Button>
          <Loader></Loader>
        </Box>
        {/* <CircleButton> </CircleButton> */}
      </VStack>
    </Center>
    // <p class="text-4xl text-green-700 text-center py-20"></p>
  );
};

export default App;

let cache = [];

for (let i of range(0, 255)) {
  for (let j of range(0, 100, 5)) {
    let color = String(i);
    let opacity = String(j);

    if (i < 10) {
      color = `00${i}`;
    } else if (i >= 10 && i < 100) {
      color = `0${i}`;
    }

    if (j < 10) {
      opacity = `00${j}`;
    } else if (j >= 10 && j < 100) {
      opacity = `0${j}`;
    }

    // console.log(
    //   `"${color}-${opacity}": "rgba(${color},${color},${color}, ${j / 100})"`
    // );
    if (j === 100) {
      cache.push(
        `--app-gray-${color}: rgba(${color},${color},${color}, ${j / 100})`
      );
    } else {
      cache.push(
        `--app-gray-${color}-${opacity}: rgba(${color},${color},${color}, ${
          j / 100
        })`
      );
    }
  }
}

console.log(cache.join(";\n"));

// let alpha = "0123456789abcdef".split("");

// let cache = [];

// let counter = 0;
// for (let i of alpha) {
//   for (let j of alpha) {
//     let counterStr = String(counter);
//     if (counter < 10) {
//       counterStr = `00${counter}`;
//     } else if (counter >= 10 && counter < 100) {
//       counterStr = `0${counter}`;
//     }

//     counter++;

//     let code = `${i}${j}`;
//     code = `--app-gray-${code}: #${code}${code}${code}`;
//     // console.log(code);
//     cache.push(code);
//   }
// }

// console.log(cache.join(";\n"));
