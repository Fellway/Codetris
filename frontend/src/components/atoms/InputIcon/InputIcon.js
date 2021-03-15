import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../../../theme/MainTheme';

const Wrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 40px;
  background-image: url(${({ icon }) => icon});
  background-position: 15px 10px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-color: ${({ dark }) => (dark ? theme.grey500 : theme.grey100)};
  color: ${({ dark }) => (dark ? theme.grey100 : theme.colors.primary)};
  padding-left: 50px;
  transition: 0.5s;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px -1px ${theme.colors.primary};
  }

  ::placeholder {
    color: ${({ dark }) => (dark ? theme.grey100 : theme.grey500)};
  }
`;

const Hint = styled.span`
  color: ${({ dark }) => (dark ? theme.colors.primary : theme.grey500)};
  letter-spacing: 1px;
  font-size: ${theme.fontSize.xs};
  width: fit-content;
  float: right;
  padding-top: 15px;

  :hover {
    cursor: pointer;
  }
`;

const InputIcon = ({ hint, dark, placeholder, icon, type }) => (
  <Wrapper>
    <Input type={type} dark={dark} placeholder={placeholder} icon={icon} />
    {hint && <Hint dark={dark}>{hint}</Hint>}
  </Wrapper>
);

export default InputIcon;

InputIcon.propTypes = {
  hint: PropTypes.string,
  type: PropTypes.string,
  dark: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

InputIcon.defaultProps = {
  hint: '',
  type: 'text',
  placeholder: '',
  dark: false,
};
