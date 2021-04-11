import styled from 'styled-components';
import LinkIcon from '@material-ui/icons/OpenInNew';
import React from 'react';
import PropTypes from 'prop-types';
import { theme } from 'theme/MainTheme';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 25px auto;
  color: ${theme.grey200};
  font-size: ${theme.fontSize.xs};

  &:hover {
    cursor: pointer;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Link = ({ children, href }) => (
  <Wrapper>
    <LinkIcon fontSize="inherit" />
    <StyledA href={href}>{children}</StyledA>
  </Wrapper>
);

export default Link;

Link.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string.isRequired,
};

Link.defaultProps = {
  children: '',
};
