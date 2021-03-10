import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../../../theme/MainTheme';

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  filter: ${({ active }) => (active ? 'brightness(1)' : 'brightness(0.7)')};
`;

const Button = styled.button`
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  background-color: ${({ active }) => (active ? theme.colors.primary : 'transparent')};
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.bold};
  color: ${({ active }) => (active ? theme.white : theme.grey200)};
  border: none;
  border-radius: 15px;
`;

const Text = styled.span`
  padding: ${({ children }) => (children ? '0 80px 0 5px' : '0')};
`;

const ButtonIcon = ({ active, icon, children }) => (
  <Button active={active}>
    <Icon active={active} icon={icon} />
    <Text>{children}</Text>
  </Button>
);

export default ButtonIcon;

ButtonIcon.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  children: PropTypes.string,
};

ButtonIcon.defaultProps = {
  children: '',
  active: false,
};
