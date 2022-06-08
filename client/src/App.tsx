import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Home, Partners, Service} from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <Partners/>
      <GlobalStyle/>
      <Service/>
    </ThemeProvider>

  );
}

export default App;
