import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
// import { ThemeProvider } from "styled-components";
import { ThemeProvider } from '@mui/material'
import { QueryClientProvider, QueryClient } from 'react-query'
import GlobalStyle from './global-styles';

import store from './store';
import Routes from './routes';
import Theme from './theme';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Provider store={store}>
          <ThemeProvider theme={Theme}>
            <Routes />
            <StyledWrap />
          </ThemeProvider>
        </Provider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;

const StyledWrap = () => {
  const lowcarbon = useSelector(state => state.lowcarbon);
  return (<GlobalStyle lowcarbon={lowcarbon} />);
};
