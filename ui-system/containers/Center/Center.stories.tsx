import { Meta } from "@storybook/html";
import { Box, Center } from "ui-system";

export default {
  title: "ui-system/containers/Center",
  name: "Center",
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
- it is only a Box with ${"`justify-content: center;`"} and ${"`align-items: center;`"}
        `,
      },
    },
  },
} as Meta;

export const Container = () => {
  return (
    <Center class="h-96 w-96 bg-green-200">
      <Box class="h-28 w-28 bg-yellow-200"></Box>
    </Center>
  );
};
