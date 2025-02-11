import { Typography } from "./Typography";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "Shared/Typography",
  component: Typography,
  args: {
    variant: "body",
    children: "Пример текста",
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Title: Story = {
  args: {
    variant: "title",
    children: "Заголовок",
  },
};

export const Body: Story = {
  args: {
    variant: "body",
    children: "Обычный текст",
  },
};
