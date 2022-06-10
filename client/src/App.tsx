import React from 'react';
import { NullDiv } from './pages/Header/styles';
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
      <NullDiv id="partners"></NullDiv>
      <Partners/>
      <NullDiv id="footer"></NullDiv>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>

  );
}

export default App;
