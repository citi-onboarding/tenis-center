import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Partners, Service, Project, HeaderTennis, Footer } from './pages';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderTennis/>
      <Project id="project"/>
      <Service id="service"/>
      <Partners/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>

  );
}

export default App;
