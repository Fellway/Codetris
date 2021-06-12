import React from 'react';
import NavigationTemplate from 'components/templates/NavigationTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';

const Wrapper = styled.div`
  min-width: 100%;
  width: fit-content;
  min-height: 100vh;
  padding-top: 60px;
  padding-left: ${({ isSidebarClosed }) => (!isSidebarClosed ? '280px' : '130px')};
  background-color: ${theme.grey500};
`;

class UserPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSidebarClosed: false };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState((prevState) => ({
      isSidebarClosed: !prevState.isSidebarClosed,
    }));
  }

  render() {
    const { isSidebarClosed } = this.state;
    const { children } = this.props;
    return (
      <>
        <NavigationTemplate isSidebarClosed={isSidebarClosed} toggleSidebar={this.toggleSidebar} />
        <Wrapper isSidebarClosed={isSidebarClosed}>{children}</Wrapper>
      </>
    );
  }
}

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
