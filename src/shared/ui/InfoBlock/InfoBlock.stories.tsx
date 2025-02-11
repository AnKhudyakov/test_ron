import { InfoBlock } from './InfoBlock';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InfoBlock> = {
  title: 'Shared/InfoBlock',
  component: InfoBlock,
  args: {
    label: 'Ветер',
    value: '5 м/c, западный',
  },
};

export default meta;
type Story = StoryObj<typeof InfoBlock>;

export const Default: Story = {};
