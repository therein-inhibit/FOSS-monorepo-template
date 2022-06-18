import { Meta } from "@storybook/html";
import { Box, Center } from "ui-system";

export default {
  title: "ui-system/containers/CenterAxis",
  name: "CenterAxis",

  parameters: {
    viewMode: "docs",
    docs: {
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
} as Meta;

export const Default = () => {
  return (
    <Center class="h-96 w-96 bg-green-200">
      <Box class="h-28 w-28 bg-yellow-200"></Box>
    </Center>
  );
};
