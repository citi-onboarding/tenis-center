import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Card , Partners} from './components'
import { Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Partners/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
