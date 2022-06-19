import { Meta } from "@storybook/html";
import { Button, Center } from "ui-system";

export default {
  title: "ui-system/elements/Button",
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
  return (
    <Center class="h-96 w-96 bg-[#ebebeb] text-slate-600">
      <Button> hello </Button>
    </Center>
  );
};
