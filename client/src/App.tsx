import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Partners, Service, Project } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Service/>
      <Project/>
      <Partners/>
      <GlobalStyle/>
    </ThemeProvider>

  );
}

export default App;
