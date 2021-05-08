import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import propTypes from 'prop-types';

const Wrapper = styled.div`
  color: ${theme.grey200};
  border-bottom: 1px solid ${theme.grey200};
  font-size: ${theme.fontSize.s};
  padding: 20px;
  width: 90%;
  margin-left: 20px;
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
`;

const Label = ({ children, icon }) => (
  <Wrapper>
    {icon}
    {children}
  </Wrapper>
);

export default Label;

Label.propTypes = {
  icon: propTypes.element,
  children: propTypes.string.isRequired,
};

Label.defaultProps = {
  icon: '',
};
