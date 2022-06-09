import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Card } from './components/Card';
import { Footer } from './pages/footer'
import { Home  , Partners, HeaderTennis, Service } from './pages';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderTennis/>
      <Service id="service"/>
      <Partners/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>

  );
}

export default App;
