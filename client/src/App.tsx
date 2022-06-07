import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Card } from './components/Card';
import { Footer } from './pages/footer'


function App() {
  return (
    <ThemeProvider theme={theme}>
       <Card/>
       <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
