import type { Component } from "solid-js";
import { Box, Button, Center, VStack, FlatButton } from "ui-system";

// TODO: create containers, elements, components and widget
const App: Component = () => {
  return (
    <Center class="h-screen w-screen bg-app-gray-003 text-slate-600">
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
      </VStack>
    </Center>
    // <p class="text-4xl text-green-700 text-center py-20"></p>
  );
};

export default App;
