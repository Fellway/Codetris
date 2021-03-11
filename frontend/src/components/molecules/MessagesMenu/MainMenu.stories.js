import React from 'react';
import styled from 'styled-components';
import MessagesMenu from './MessagesMenu';

const BlackBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 500px;
  background-color: ${({ theme }) => theme.grey500};
`;

export default {
  title: 'Components/molecules/MessagesMenu',
  component: MessagesMenu,
  decorators: [
    (Story) => (
      <BlackBackground>
        <Story />
      </BlackBackground>
    ),
  ],
};

export const Messages = () => <MessagesMenu />;
