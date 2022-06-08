import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Partners, Service } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Service/>
      <Partners/>
      <GlobalStyle/>
    </ThemeProvider>

  );
}

export default App;
