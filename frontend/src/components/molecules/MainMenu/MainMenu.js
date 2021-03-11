import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import React from 'react';
import styled from 'styled-components';
import DashboardIcon from 'assets/dashboard.svg';
import SettingsIcon from 'assets/settings.svg';
import CalendarIcon from 'assets/calendar.svg';
import ProjectIcon from 'assets/project.svg';
import TaskIcon from 'assets/tasks.svg';

const Wrapper = styled.div`
  display: grid;
  row-gap: 10px;
  justify-items: start;
`;

const MainMenu = () => (
  <Wrapper>
    <ButtonIcon icon={DashboardIcon}>Dashboard</ButtonIcon>
    <ButtonIcon icon={CalendarIcon}>Calendar</ButtonIcon>
    <ButtonIcon icon={ProjectIcon}>Projects</ButtonIcon>
    <ButtonIcon icon={TaskIcon}>Tasks</ButtonIcon>
    <ButtonIcon icon={SettingsIcon} active>
      Settings
    </ButtonIcon>
  </Wrapper>
);

export default MainMenu;
