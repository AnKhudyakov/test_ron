import { Meta, StoryFn } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Weather } from './Weather';
// import { mswDecorator } from 'msw-storybook-addon';
import { http } from 'msw';

const queryClient = new QueryClient();

export default {
  title: 'Weather/Weather',
  component: Weather,
  //decorators: [mswDecorator],
} as Meta;

type Story = StoryFn<typeof Weather>;

const Template: Story = () => (
  <QueryClientProvider client={queryClient}>
    <Weather />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {};

// export const LoadingState = Template.bind({});
// LoadingState.args = {};
// LoadingState.parameters = {
//   msw: {
//     handlers: [
//       http.get('/geolocation', (req, res, ctx) => {
//         return res(ctx.json({ data: null, isLoading: true, error: null }));
//       }),
//     ],
//   },
// };

// export const ErrorState = Template.bind({});
// ErrorState.args = {};
// ErrorState.parameters = {
//   msw: {
//     handlers: [
//       http.get('/geolocation', (req, res, ctx) => {
//         return res(
//           ctx.json({
//             data: null,
//             isLoading: false,
//             error: 'Ошибка загрузки данных',
//           })
//         );
//       }),
//     ],
//   },
// };

// export const LoadedState = Template.bind({});
// LoadedState.args = {};
// LoadedState.parameters = {
//   msw: {
//     handlers: [
//       http.get('/geolocation', (req, res, ctx) => {
//         return res(
//           ctx.json({
//             data: {
//               name: 'Moscow',
//               weather: [{ icon: '01d' }],
//               main: { temp: 20, humidity: 50, pressure: 1013 },
//               wind: { speed: 5 },
//             },
//             isLoading: false,
//             error: null,
//           })
//         );
//       }),
//     ],
//   },
// };
