import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles';
import { theme } from 'theme';
import GamePage from 'pages/GamePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <GamePage />
      </>
    </ThemeProvider>
  );
}

export default App;
