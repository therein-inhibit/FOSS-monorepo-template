import type { Component } from "solid-js";
import {
  Box,
  Button,
  Center,
  VStack,
  FlatButton,
  Overlay,
  ButtonShallow,
  Bar,
  Spinner,
} from "ui-system";
import { range } from "lib";
// import { Loader } from "../elements/Loader";

// TODO: create containers, elements, components and widget
const App: Component = () => {
  return (
    <>
      <Center class="h-full w-full bg-app-gray-235 text-app-gray-050">
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
            <Button class="h-16 w-16 p-[170px]">Back</Button>
          </Box>
          <Box>
            <Button class="h-16 w-16 p-[170px]">Back</Button>
          </Box>
          <Box>
            <Button class="h-16 w-16 p-[170px]">Back</Button>
          </Box>
          {/* <CircleButton> </CircleButton> */}
        </VStack>
      </Center>
      <Overlay>
        <Center class="w-full h-full">
          <Spinner />
        </Center>
      </Overlay>
    </>
    // <p class="text-4xl text-green-700 text-center py-20"></p>
  );
};

export default App;
