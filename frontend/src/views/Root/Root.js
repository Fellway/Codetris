import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Navbar from 'components/organisms/Navbar/Navbar';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Sidebar />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
