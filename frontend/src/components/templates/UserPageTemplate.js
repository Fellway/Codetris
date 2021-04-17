import React from 'react';
import NavigationTemplate from 'components/templates/NavigationTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';

const Wrapper = styled.div`
  min-width: 100%;
  width: fit-content;
  min-height: 100vh;
  padding-left: 130px;
  padding-top: 60px;
  background-color: ${theme.grey500};
`;

const UserPageTemplate = ({ children }) => (
  <>
    <NavigationTemplate />
    <Wrapper>{children}</Wrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
