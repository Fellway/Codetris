import React from 'react';
import styled from 'styled-components';
import DashboardIcon from 'assets/dashboard.svg';
import SettingsIcon from 'assets/settings.svg';
import CalendarIcon from 'assets/calendar.svg';
import ProjectIcon from 'assets/project.svg';
import TaskIcon from 'assets/tasks.svg';
import ChatIcon from 'assets/chat.svg';
import NotificationIcon from 'assets/bell.svg';
import EmailIcon from 'assets/email.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { theme } from 'theme/MainTheme';
import { NavLink } from 'react-router-dom';
import LogoImage from 'assets/logo.png';

const Wrapper = styled.div`
  width: fit-content;
  padding: 20px;
  background-color: ${theme.grey500};
  min-height: 100vh;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
`;

const Text = styled.div`
  color: ${theme.grey100};
  font-size: ${theme.fontSize.l};
  font-weight: ${theme.fontWeight.bold};
`;

const LogoWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 50px auto;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 15px;
`;

const MenuWrapper = styled.div`
  display: grid;
  row-gap: 10px;
  justify-items: start;
`;

const SpaceLine = styled.hr`
  height: 1px;
  width: 100%;
  background-color: ${theme.grey400};
  border: none;
  margin: 40px 0;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClosed: true };
  }

  render() {
    const { isClosed } = this.state;
    return (
      <Wrapper>
        <LogoWrapper>
          <Logo />
          {!isClosed && <Text>Codetris</Text>}
        </LogoWrapper>
        <MenuWrapper>
          <NavigationLink exact to="/">
            <ButtonIcon short={isClosed} icon={DashboardIcon}>
              Dashboard
            </ButtonIcon>
          </NavigationLink>
          <NavigationLink to="/calendar">
            <ButtonIcon short={isClosed} icon={CalendarIcon}>
              Calendar
            </ButtonIcon>
          </NavigationLink>
          <NavigationLink to="/projects">
            <ButtonIcon short={isClosed} icon={ProjectIcon}>
              Projects
            </ButtonIcon>
          </NavigationLink>
          <NavigationLink to="/tasks">
            <ButtonIcon short={isClosed} icon={TaskIcon}>
              Tasks
            </ButtonIcon>
          </NavigationLink>
          <NavigationLink to="/settings">
            <ButtonIcon short={isClosed} icon={SettingsIcon}>
              Settings
            </ButtonIcon>
          </NavigationLink>
        </MenuWrapper>
        <SpaceLine />
        <MenuWrapper>
          <NavigationLink to="/chat">
            <ButtonIcon short={isClosed} icon={ChatIcon}>
              Chat
            </ButtonIcon>
          </NavigationLink>
          <NavigationLink to="/notifications">
            <ButtonIcon short={isClosed} icon={NotificationIcon}>
              Notifications
            </ButtonIcon>
          </NavigationLink>
          <NavigationLink to="/emails">
            <ButtonIcon short={isClosed} icon={EmailIcon}>
              Emails
            </ButtonIcon>
          </NavigationLink>
        </MenuWrapper>
      </Wrapper>
    );
  }
}

export default Sidebar;
