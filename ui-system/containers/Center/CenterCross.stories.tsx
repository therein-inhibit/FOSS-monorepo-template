import { Meta } from "@storybook/html";
import { Box, CenterCross } from "ui-system";

export default {
  title: "ui-system/containers/CenterCross",
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
### It centers its children along the cross axis
- it is only a Box with ${"`align-items: center;`"}
- if ${"`flex-direction : row;`"} it will center vertically
- if ${"`flex-direction : column;`"} it will center horizontally
        `,
      },
    },
  },
} as Meta;

export const Container = ({ column }) => {
  return (
    <CenterCross class={`h-96 w-96 bg-green-200 ${column}`}>
      <Box class="h-28 w-28 bg-yellow-200"></Box>
    </CenterCross>
  );
};
