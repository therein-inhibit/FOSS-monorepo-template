import { Component, createEffect } from "solid-js";
import {
  Box,
  // Button,
  Center,
  VStack,
  // FlatButton,
  // Card,
  // ButtonShallow,
  // RaisedCard,
  // Spinner,
  // Modal,
  // ShallowCard,
  // RaisedCard,
  // Text,
  HStack,
  Button,
  Card,
  // CloseButton,
} from "ui-system";
import { range } from "lib";
import { Close as CloseIcon } from "ui-system/icons";

// import { Card } from "ui-system/elements/Card2";

// TODO: create containers, elements, components and widget
const App: Component = () => {
  return (
    <>
      <Center class="h-full w-full text-app-gray-050 p-2">
        <VStack class="gap-20 items-center mt-4">
          {/* <RaisedCard class="h-[64px] w-[192px]"> */}
          {/* <RaisedCard class="rounded-md">
            <HStack class="gap-2 m-1">
              <ShallowCard class="w-16 h-fit rounded-sm">btn</ShallowCard>
              <Center class="w-16 h-fit rounded-sm">btn 2</Center> */}
          {/* <FlatButton id="AAA" class="p-2">
                <Center class="w-16">Flat</Center>
              </FlatButton>
              <FlatButton id="AAA" class="p-2">
                <Center class="w-16">Flat 2</Center>
              </FlatButton> */}
          {/* </HStack>
          </RaisedCard> */}
          <HStack class="gap-4">
            <Button
              class="w-32 h-32"
              onClick={(evt) => {
                console.log("BBB", evt);
              }}
            >
              Click
            </Button>
            <Card class="w-32 h-32">
              <Center class="w-full h-full">Card</Center>
            </Card>
            {/* <ShallowCard class="h-32 w-32" shallow />
            <ShallowCard class="h-32 w-32" />

            <ShallowCard class="h-64 w-8" shallow />
            <ShallowCard class="h-64 w-8" />

            <VStack class="gap-4">
              <ShallowCard class="h-8 w-64" shallow />
              <ShallowCard class="h-8 w-64" />
            </VStack>
          </HStack>
          <HStack class="gap-4">
            <RaisedCard class="h-32 w-32" raised />
            <RaisedCard class="h-32 w-32" />

            <RaisedCard class="h-64 w-8" raised />
            <RaisedCard class="h-64 w-8" />

            <VStack class="gap-4">
              <RaisedCard class="h-8 w-64" raised />
              <RaisedCard class="h-8 w-64" />
            </VStack> */}
          </HStack>

          {/* <Center class="mt-14">
            <Spinner />
          </Center> */}
          {/* <Center>
            <Spinner />
          </Center> */}
          {/* <Button
            class="p-3"
            onClick={(evt) => {
              // console.log("raised btn clicked", evt);
            }}
          >
            raised
          </Button> */}

          {/* <FlatButton
            class="p-3"
            onClick={() => {
              let [_, set] = Modal.signal;
              set(true);
            }}
          >
            OpenModal
          </FlatButton> */}
          {/* <Box>
            <Button class="h-16 w-16 p-[170px]">Back</Button>
          </Box>
          <Box>
            <Button class="h-16 w-16 p-[170px]">Back</Button>
          </Box>
          <Box>
            <Button class="h-16 w-16 p-[170px]">Back</Button>
          </Box> */}
          {/* <CircleButton> </CircleButton> */}
        </VStack>
      </Center>

      {/* <Modal
        class="h-[32rem] w-[32rem]"
        body={
          <VStack>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh
              ipsum consequat nisl vel pretium lectus quam id leo. Sollicitudin
              ac orci phasellus egestas tellus rutrum tellus. Ut ornare lectus
              sit amet est placerat in egestas. Nibh sit amet commodo nulla
              facilisi nullam vehicula ipsum. Mi tempus imperdiet nulla
              malesuada pellentesque elit eget gravida. Est ante in nibh mauris
              cursus mattis molestie a. Nunc mi ipsum faucibus vitae aliquet nec
              ullamcorper sit amet. Metus dictum at tempor commodo ullamcorper a
              lacus. Sed ullamcorper morbi tincidunt ornare massa eget egestas
              purus. Gravida neque convallis a cras semper auctor neque vitae.
              In nisl nisi scelerisque eu ultrices. Tempor id eu nisl nunc mi
              ipsum faucibus vitae aliquet. Adipiscing elit duis tristique
              sollicitudin. Sed velit dignissim sodales ut eu. Ipsum nunc
              aliquet bibendum enim facilisis. Ut eu sem integer vitae justo
              eget. Nec tincidunt praesent semper feugiat. Varius quam quisque
              id diam vel. Vitae elementum curabitur vitae nunc sed velit
              dignissim sodales. Tortor at auctor urna nunc id cursus. Blandit
              massa enim nec dui nunc mattis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh
              ipsum consequat nisl vel pretium lectus quam id leo. Sollicitudin
              ac orci phasellus egestas tellus rutrum tellus. Ut ornare lectus
              sit amet est placerat in egestas. Nibh sit amet commodo nulla
              facilisi nullam vehicula ipsum. Mi tempus imperdiet nulla
              malesuada pellentesque elit eget gravida. Est ante in nibh mauris
              cursus mattis molestie a. Nunc mi ipsum faucibus vitae aliquet nec
              ullamcorper sit amet. Metus dictum at tempor commodo ullamcorper a
              lacus. Sed ullamcorper morbi tincidunt ornare massa eget egestas
              purus. Gravida neque convallis a cras semper auctor neque vitae.
              In nisl nisi scelerisque eu ultrices. Tempor id eu nisl nunc mi
              ipsum faucibus vitae aliquet. Adipiscing elit duis tristique
              sollicitudin. Sed velit dignissim sodales ut eu. Ipsum nunc
              aliquet bibendum enim facilisis. Ut eu sem integer vitae justo
              eget. Nec tincidunt praesent semper feugiat. Varius quam quisque
              id diam vel. Vitae elementum curabitur vitae nunc sed velit
              dignissim sodales. Tortor at auctor urna nunc id cursus. Blandit
              massa enim nec dui nunc mattis.
            </p>
          </VStack>
        }
      >

      </Modal> */}
      {/* <Overlay>
        <Center class="w-full h-full">
        </Center>
      </Overlay> */}
    </>
    // <p class="text-4xl text-green-700 text-center py-20"></p>
  );
};

export default App;
