import { Button, ButtonProps } from "@big-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Procurar",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "big",
  },
};
