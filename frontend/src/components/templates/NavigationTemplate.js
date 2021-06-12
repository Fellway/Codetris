import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Navbar from 'components/organisms/Navbar/Navbar';
import PropTypes from 'prop-types';

const NavigationTemplate = ({ isSidebarClosed, toggleSidebar }) => (
  <>
    <Sidebar isClosed={isSidebarClosed} toggleSidebar={toggleSidebar} />
    <Navbar isSidebarClosed={isSidebarClosed} />
  </>
);

export default NavigationTemplate;

NavigationTemplate.propTypes = {
  isSidebarClosed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};
