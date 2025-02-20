import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from '../router';
import { AppContextProvider } from './context';

const queryClient = new QueryClient();

export const AppProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </QueryClientProvider>
  );
};
