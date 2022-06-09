import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Card } from './components/Card';
import { Footer } from './pages/footer';
import { Navbar } from './pages/navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Footer/>
       <Navbar/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
