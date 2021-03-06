import { Meta } from "@storybook/html";
import { Box, CenterAxis } from "ui-system";

export default {
  title: "ui-system/containers/CenterAxis",
  name: "CenterAxis",

  argTypes: {
    column: {
      control: { type: "select" },
      defaultValue: "flex-row",
      description: "tailwind flex-row/flex-col classes",
      options: ["flex-row", "flex-col"],
    },
  },

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
### It centers its children along the main axis
- it is only a Box with ${"`justify-content: center;`"}
- if ${"`flex-direction : row;`"} it will center horizontaly
- if ${"`flex-direction : column;`"} it will center verticaly
        `,
      },
    },
  },
} as Meta;

export const Container = ({ column = false }) => {
  return (
    <CenterAxis class={`h-96 w-96 bg-green-200 ${column}`}>
      <Box class="h-28 w-28 bg-yellow-200"></Box>
    </CenterAxis>
  );
};
