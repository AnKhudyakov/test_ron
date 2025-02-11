import { ArrowIcon } from '../ArrowIcon/ArrowIcon';
import { Button } from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Сменить город',
    disabled: false,
    onClick: () => {},
  },
};
export const Disabled: Story = {
  args: {
    children: 'Мое местоположение',
    disabled: true,
    onClick: () => {},
    icon: <ArrowIcon />,
  },
};
