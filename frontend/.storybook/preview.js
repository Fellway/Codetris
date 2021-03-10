import React from 'react';
import GlobalStyle from '../src/theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
