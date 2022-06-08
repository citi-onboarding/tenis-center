import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Home  , Partners, HeaderTennis} from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderTennis/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
