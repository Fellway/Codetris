import React from 'react';
import DashboardIcon from 'assets/dashboard.svg';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'Components/atoms/ButtonIcon',
  component: ButtonIcon,
};

export const DashboardIconEmpty = () => <ButtonIcon icon={DashboardIcon} />;
export const DashboardIconText = () => <ButtonIcon icon={DashboardIcon}>Dashboard</ButtonIcon>;
export const DashboardIconTextActive = () => (
  <ButtonIcon icon={DashboardIcon}>Dashboard</ButtonIcon>
);
