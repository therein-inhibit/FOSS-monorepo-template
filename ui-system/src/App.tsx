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
} from "ui-system";

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

        <CircleButton> </CircleButton>
      </VStack>
    </Center>
    // <p class="text-4xl text-green-700 text-center py-20"></p>
  );
};

export default App;

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
