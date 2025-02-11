import { Temperature } from './Temperature';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Temperature> = {
  title: 'Shared/Temperature',
  component: Temperature,
  args: {
    value: 19,
    unit: 'C',
  },
};

export default meta;
type Story = StoryObj<typeof Temperature>;

export const Celsius: Story = {
  args: {
    value: 23,
    unit: 'C',
  },
};

export const Fahrenheit: Story = {
  args: {
    value: 66,
    unit: 'F',
  },
};
