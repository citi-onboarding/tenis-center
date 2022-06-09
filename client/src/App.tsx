import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Home  , Partners, HeaderTennis, Service } from './pages';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderTennis/>
      <Service id="service"/>
      <Partners/>
      <GlobalStyle/>
    </ThemeProvider>

  );
}

export default App;
