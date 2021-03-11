import React from 'react';
import styled from 'styled-components';
import MainMenu from './MainMenu';

const BlackBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 500px;
  background-color: ${({ theme }) => theme.grey500};
`;

export default {
  title: 'Components/molecules/MainMenu',
  component: MainMenu,
  decorators: [
    (Story) => (
      <BlackBackground>
        <Story />
      </BlackBackground>
    ),
  ],
};

export const Menu = () => <MainMenu />;
