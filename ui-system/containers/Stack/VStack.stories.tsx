import { Meta } from "@storybook/html";
import { Index } from "solid-js";
import { VStack, Center } from "ui-system";
import { StackProps } from "ui-system/containers/types";

export default {
  title: "ui-system/containers/VStack",
  name: "VStack",
  argTypes: {
    stackClass: {
      control: "text",
      description: "tailwind class",
      table: {
        type: { summary: "string" },
      },
    },
    itemsClass: {
      control: "text",
      description: "tailwind class",
      table: {
        type: { summary: "string" },
      },
    },
    overflow: {
      control: { type: "select" },
      description: "tailwind overflow class",
      options: [
        "overflow-auto",
        "overflow-hidden",
        "overflow-clip",
        "overflow-visible",
        "overflow-scroll",
      ],
    },
    reverse: {
      control: "boolean",
      defaultValue: false,
      description: "If VStack should reverse or not",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    wrap: {
      defaultValue: true,
      control: "boolean",
      description: "If VStack should wrap or not",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    // label: { control: "text" },
  },
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component: `
  ### It stacks its children vertically
  - by default its contents overflow

          `,
      },
    },
  },
} as Meta;

// let [storyClass, setStoryClass] = createSignal("");

export const Container = ({ wrap, reverse, ...rest }: StackProps) => {
  let list = [...Array(50).keys()];

  return (
    <VStack
      wrap={wrap}
      reverse={reverse}
      class={` ${rest.overflow} ${rest.stackClass}`}
    >
      <Index each={list}>
        {(_, i) => <Center class={rest.itemsClass as string}>{i + 1}</Center>}
      </Index>
    </VStack>
  );
};

Container.args = {
  overflow: "overflow-scroll",
  stackClass: "gap-1 h-36 w-96 bg-green-200 shadow-2xl p-4",
  itemsClass: "h-8 w-8 bg-yellow-200",
};

Container.parameters = {
  viewMode: "docs",
  docs: {
    source: {
      code: `
let list = [...Array(50).keys()];

<VStack wrap={true} reverse={false}>
  <Index each={list}>
    {(_, i) => <Center>{i + 1}</Center>}
  </Index>
</VStack>
`,
    },
  },
};
