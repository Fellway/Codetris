import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../../../theme/MainTheme';

const Input = styled.input`
  width: 50%;
  height: 25px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  background-image: url(${({ icon }) => icon});
  background-position: 10px 5px;
  background-size: 15px;
  background-repeat: no-repeat;
  padding-left: 40px;
  transition: 0.5s;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px -1px ${theme.colors.primary};
  }
`;

const InputIcon = ({ placeholder, icon }) => <Input placeholder={placeholder} icon={icon} />;

export default InputIcon;

InputIcon.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

InputIcon.defaultProps = {
  placeholder: '',
};
