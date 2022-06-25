import { Component, createEffect } from "solid-js";
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
  Modal,
} from "ui-system";
import { range } from "lib";
// import { Loader } from "../elements/Loader";

// setTimeout(() => {
//   console.log("active");
//   let [_, set] = Overlay.signal;
//   set(true);

//   setTimeout(() => {
//     console.log("deac");
//     set(false);
//   }, 5000);
// }, 5000);

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
      <Modal class="h-64 w-64 ">
        <Button
          class="p-3"
          onClick={() => {
            createEffect(() => {
              let [_, set] = Overlay.signal;
              set(false);
            });
          }}
        >
          Close
        </Button>
        <Center class="h-full w-full">
          <Spinner />
        </Center>
      </Modal>
      {/* <Overlay>
        <Center class="w-full h-full">
        </Center>
      </Overlay> */}
    </>
    // <p class="text-4xl text-green-700 text-center py-20"></p>
  );
};

export default App;
