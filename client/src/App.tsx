import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Card } from './components/Card';
import { Photo } from './assets/index';
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Card image= {Photo} />
       <FooterContainer />
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
