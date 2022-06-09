import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Card } from './components/Card';
import { Footer } from './pages/footer';
import { Navbar } from './pages/navbar';
import { Home  , Partners, HeaderTennis, Service } from './pages';


function App() {
  return (
    <ThemeProvider theme={theme}>
       <Navbar id="service" id="partners"/>
      <HeaderTennis/>
      <Service id="service"/>
      <Partners id="partners"/>
      <Footer id="footer"/>
      <GlobalStyle/>
    </ThemeProvider>

  );
}

export default App;
