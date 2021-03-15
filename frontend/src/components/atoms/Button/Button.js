import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import PropTypes from 'prop-types';

const Wrapper = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 50px;
  background: rgb(130, 77, 255);
  background: linear-gradient(90deg, ${theme.colors.primary} 20%, ${theme.colors.secondary} 91%);
  border: none;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.s};
  color: ${theme.grey100};
  letter-spacing: 2px;
  box-shadow: 0px 0px 3px -1px ${theme.colors.primary};
  transition: 0.5s;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px -1px ${theme.colors.primary};
  }
`;

const Button = ({ children }) => <Wrapper> {children}</Wrapper>;

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
