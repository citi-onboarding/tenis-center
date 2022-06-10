import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Project, HeaderTennis, Footer } from './pages';
import { Card } from './components/Card';
import { Navbar } from './pages/navbar';
import { Home, Partners, Service } from './pages';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderTennis/>
      <Project id="project"/>
      <Service id="service"/>
      <Partners id="partners"/>
      <Footer id="footer"/>
      <GlobalStyle/>
    </ThemeProvider>

  );
}

export default App;
