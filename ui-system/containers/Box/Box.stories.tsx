import { Story, Meta } from "@storybook/html";
import { Box, Center } from "ui-system";

export default {
  title: "ui-system/containers/Box",
  name: "Box",
  parameters: {
    viewMode: "docs",
    docs: {
      source: {
        code: `<Box class="h-96 w-96 shadow-2xl"></Box>`,
      },
      description: {
        component: `
### The most basic container
- it is only a div with ${"`display: flex;`"}
        `,
      },
    },
  },
} as Meta;

export const Container = () => {
  return <Box class="h-96 w-96 shadow-2xl"></Box>;
};
