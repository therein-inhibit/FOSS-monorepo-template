import type { Component } from "solid-js";
import Box from "ui-system/containers/Box";

import Center from "ui-system/containers/Center";
// import './index.css'

// TODO: create containers, elements, components and widget
const App: Component = () => {
  return (
    // <Center class="">
    //   <Box class="h-28 w-28 bg-yellow-200">A</Box>
    // </Center>
    <Center class=" h-screen w-screen bg-green-200">
      <Box class="h-28 w-28 bg-yellow-200"></Box>
    </Center>
    // <p class="text-4xl text-green-700 text-center py-20"></p>
  );
};

export default App;
