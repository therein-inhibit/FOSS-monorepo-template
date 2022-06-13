import { Story, Meta } from "@storybook/html";
import { Box, Center } from "ui-system";

export default {
  title: "containers/Center",
  parameters: {
    // viewMode: "docs",
    docs: {
      // previewSource: "open",
      source: {
        code: `
<Center class="h-96 w-96 bg-green-200">
  <Box class="h-28 w-28 bg-yellow-200"></Box>
</Center>`,
      },
      description: {
        component: `
### It centers its children items vertically and horizontally
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
    <Center class="h-96 w-96 bg-green-200">
      <Box class="h-28 w-28 bg-yellow-200"></Box>
    </Center>
    // </Center>
  );
};
