import type { Component } from "solid-js";
import { Box, Button, Center, VStack, FlatButton } from "ui-system";

// TODO: create containers, elements, components and widget
const App: Component = () => {
  return (
    <Center class="h-screen w-screen bg-app-light text-slate-600">
      <VStack class="gap-28">
        <Button
          onClick={(evt) => {
            console.log("raised btn clicked", evt);
          }}
        >
          hello
        </Button>
        <Button
          variante="shallow"
          onClick={(evt) => {
            console.log("shallow btn clicked", evt);
          }}
        >
          hello
        </Button>
        <FlatButton
          onClick={(evt) => {
            console.log("flat btn clicked", evt);
          }}
        >
          hello
        </FlatButton>
      </VStack>
    </Center>
    // <p class="text-4xl text-green-700 text-center py-20"></p>
  );
};

export default App;
