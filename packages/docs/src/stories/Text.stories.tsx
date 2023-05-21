import { Text, TextProps } from "@big-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typographic/Text",
  component: Text,
  args: {
    children: "Example text to see how text looks like",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
