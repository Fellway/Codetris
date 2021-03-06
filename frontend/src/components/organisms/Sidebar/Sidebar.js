import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
  z-index: 2;
  display: grid;
  width: fit-content;
  padding: 0 20px;
  background-color: ${theme.grey500};
  height: 100vh;
  border-right: 1px solid ${theme.grey400};
  position: fixed;
  box-shadow: 1px 0px 10px 7px ${theme.grey500};
`;

const Logo = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  justify-self: center;
`;

const Text = styled.div`
  padding: 10px;
  font-size: ${theme.fontSize.l};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.grey100};
`;

const LogoWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 50px auto;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const Menu = styled.div`
  display: grid;
  row-gap: 10px;
`;

const SpaceLine = styled.hr`
  height: 1px;
  width: 100%;
  background-color: ${theme.grey400};
  border: none;
  margin: 30px 0;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

const Footer = styled.div`
  height: 50px;
  margin-bottom: 50px;
  display: grid;
  justify-items: end;
  align-items: end;
  align-self: end;
`;
const FooterIcon = styled.button`
  background: none;
  border: none;
  color: ${theme.grey300};

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }
`;

const Sidebar = ({ isClosed, toggleSidebar }) => (
  <Wrapper>
    <LogoWrapper>
      <Logo />
      {!isClosed && <Text>Codetris</Text>}
    </LogoWrapper>
    <div>
      <Menu>
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
      </Menu>
      <SpaceLine />
      <Menu>
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
      </Menu>
    </div>
    <Footer>
      <FooterIcon onClick={toggleSidebar}>
        {isClosed && <ArrowForwardIosIcon fontSize="large" />}
      </FooterIcon>
      <FooterIcon onClick={toggleSidebar}>
        {!isClosed && <ArrowBackIosIcon fontSize="large" />}
      </FooterIcon>
    </Footer>
  </Wrapper>
);

export default Sidebar;

Sidebar.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};
