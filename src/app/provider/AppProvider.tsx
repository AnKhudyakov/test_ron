import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Weather } from 'widgets/weather/';

const queryClient = new QueryClient();

export const AppProvider = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Weather/>
    </QueryClientProvider>
  );
};
