import { ToggleUnits } from './ToggleUnits';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleUnits> = {
  title: 'features/ToggleUnits',
  component: ToggleUnits,
};

export default meta;
type Story = StoryObj<typeof ToggleUnits>;

export const Celsius: Story = {
  args: {
    unit: 'C',
    onToggle: () => {},
  },
};
export const Fahrenheit: Story = {
  args: {
    unit: 'F',
    onToggle: () => {},
  },
};
