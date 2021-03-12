import React from 'react';
import GlobalStyle from '../src/theme/GlobalStyle';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';

const BlackBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.grey100};
`;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BlackBackground>
          <Story />
        </BlackBackground>
      </ThemeProvider>
    </>
  ),
];
