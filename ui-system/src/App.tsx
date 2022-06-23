import type { Component } from "solid-js";
import {
  Box,
  Button,
  Center,
  VStack,
  FlatButton,
  CircleButton,
} from "ui-system";

// TODO: create containers, elements, components and widget
const App: Component = () => {
  return (
    <Center class="h-screen w-screen bg-app-gray-e8 text-slate-600">
      <VStack class="gap-28 items-center">
        <Button
          onClick={(evt) => {
            // console.log("raised btn clicked", evt);
          }}
        >
          raised
        </Button>
        <Button
          variante="shallow"
          onClick={(evt) => {
            // console.log("shallow btn clicked", evt);
          }}
        >
          shallow
        </Button>
        <FlatButton
          onClick={(evt) => {
            // console.log("flat btn clicked", evt);
          }}
        >
          flat
        </FlatButton>
        <CircleButton> A</CircleButton>
        {/* <div class="circle">
          <span class="circle__btn">
            <span>Pause</span>
            <span>Play</span>
          </span>
          <span class="circle__back-1"></span>
          <span class="circle__back-2"></span>
        </div> */}
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
