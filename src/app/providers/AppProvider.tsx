import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from '../router';
import { AppContextProvider } from './context';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from '../theme';

const queryClient = new QueryClient();

export const AppProvider = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <AppRouter />
        </AppContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
