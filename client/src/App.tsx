import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import Button from './components/buttoncomponent'


import { Home } from './pages';

function App() {
  return (
    /*<ThemeProvider theme={theme}>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
  */
  <Button
    text = "Fale conosco"
    backgroundColor = "#0476D9"
    width = "171px"
    height = "44px"
  />

  );
}

export default App;
