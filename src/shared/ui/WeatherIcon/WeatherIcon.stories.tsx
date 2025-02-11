import { WeatherIcon } from "./WeatherIcon";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof WeatherIcon> = {
  title: "Shared/WeatherIcon",
  component: WeatherIcon,
  args: {
    iconCode: "10d",
  },
};

export default meta;
type Story = StoryObj<typeof WeatherIcon>;

export const Default: Story = {};
