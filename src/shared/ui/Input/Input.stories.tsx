import { Input } from './Input';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: 'Таллин',
    placeholder: 'Введите город',
    onChange: () => {},
  },
};
export const Empty: Story = {
  args: {
    placeholder: 'Введите город',
    onChange: () => {},
  },
};
