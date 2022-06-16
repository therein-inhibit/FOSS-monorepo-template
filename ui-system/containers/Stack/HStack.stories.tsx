import { Meta } from "@storybook/html";
import { createSignal, Index } from "solid-js";
import { Box, HStack, Center } from "ui-system";
import { StackProps } from "ui-system/containers/types";

export default {
  title: "containers/HStack",
  argTypes: {
    class: {
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
      description: "If HStack should reverse or not",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    wrap: {
      defaultValue: true,
      control: "boolean",
      description: "If HStack should wrap or not",
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
          `,
      },
    },
  },
} as Meta;

// let [storyClass, setStoryClass] = createSignal("");

export const Default = ({ wrap, reverse, ...rest }: StackProps) => {
  let list = [...Array(50).keys()];

  // setStoryClass(rest.class);

  let stackClass = "gap-1 h-36 w-96 bg-green-200 shadow-2xl";
  let itemClass = "h-8 w-8 bg-yellow-200";

  console.log("+++", rest);

  return (
    <HStack
      wrap={wrap}
      reverse={reverse}
      class={`${stackClass} ${rest.overflow} ${rest.class}`}
    >
      <Index each={list}>
        {(_, i) => <Center class={itemClass}>{i + 1}</Center>}
      </Index>
    </HStack>
  );
};

Default.args = {
  overflow: "overflow-scroll",
  class: "p-4",
};

Default.parameters = {
  viewMode: "docs",
  //   description: {
  //     component: `
  // ### It stacks its children vertically 222
  //       `,
  //   },
  docs: {
    source: {
      code: `
let list = [...Array(50).keys()];

let stackClass = "gap-1 h-36 w-96 bg-green-200 shadow-2xl";
let itemClass = "h-8 w-8 bg-yellow-200"

<HStack wrap={true} reverse={false} class={stackClass}>
  <Index each={list}>
    {(_, i) => <Center class={itemClass}>{i + 1}</Center>}
  </Index>
</HStack>
`,
    },
  },
};
