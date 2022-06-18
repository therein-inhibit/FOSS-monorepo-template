import { Story, Meta } from "@storybook/html";
import { Box, Center } from "ui-system";

export default {
  title: "ui-system/containers/Box",
  name: "Box",
  parameters: {
    viewMode: "docs",
    docs: {
      // previewSource: "open",
      source: {
        code: `<Box class="h-96 w-96 shadow-2xl"></Box>`,
      },
      description: {
        component: `
### The most basic container
#### it is only a div with ${"`display: flex;`"}
        `,
      },
    },
  },
  // argTypes: {
  //   label: {
  //     name: "Center",
  //     description: "It centers its children horizontally and verticaly",
  //     control: {
  //       type: null,
  //     },
  //   },
  // },
  // component: Center,
} as Meta;

export const Default = () => {
  return (
    // <Center class="h-screen">
    // <Center class="h-96 w-96 bg-green-200">
    <Box class="h-96 w-96 shadow-2xl"></Box>
    // </Center>
    // </Center>
  );
};
