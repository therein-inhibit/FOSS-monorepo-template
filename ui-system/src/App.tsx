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
    <Center class="h-screen w-screen bg-app-gray-235 text-app-gray-050">
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
          <Button class="fixed h-16 w-16 p-[170px]">Back</Button>
          <Loader></Loader>
        </Box>
        {/* <CircleButton> </CircleButton> */}
      </VStack>
    </Center>
    // <p class="text-4xl text-green-700 text-center py-20"></p>
  );
};

export default App;
