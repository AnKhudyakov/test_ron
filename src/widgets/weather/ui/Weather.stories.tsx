import { Meta, StoryFn } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Weather } from './Weather';

const queryClient = new QueryClient();

export default {
  title: 'Weather/Weather',
  component: Weather,
} as Meta;

type Story = StoryFn<typeof Weather>;

const Template: Story = () => (
  <QueryClientProvider client={queryClient}>
    <Weather />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {};
