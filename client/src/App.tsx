import React from 'react';
import { NullDiv } from './pages/Header/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Card } from './components/Card';
import { Footer } from './pages/footer';
import { Navbar } from './pages/navbar';
import { Home, Partners, HeaderTennis, Service } from './pages';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderTennis></HeaderTennis>
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
