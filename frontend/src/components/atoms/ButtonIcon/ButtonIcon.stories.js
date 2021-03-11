import React from 'react';
import DashboardIcon from 'assets/dashboard.svg';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

const BlackBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: ${({ theme }) => theme.grey500};
`;

export default {
  title: 'Components/atoms/ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <BlackBackground>
        <Story />
      </BlackBackground>
    ),
  ],
};

export const DashboardIconEmpty = () => <ButtonIcon icon={DashboardIcon} />;
export const DashboardIconText = () => <ButtonIcon icon={DashboardIcon}>Dashboard</ButtonIcon>;
export const DashboardIconTextActive = () => (
  <ButtonIcon active icon={DashboardIcon}>
    Dashboard
  </ButtonIcon>
);
