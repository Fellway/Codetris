import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../../../theme/MainTheme';

const Button = styled.button`
  display: grid;
  grid-template-columns: 50px ${({ short }) => (short ? 'auto' : '150px')};
  justify-items: start;
  align-items: center;
  background-color: ${theme.grey500};
  border-radius: 15px;
  transition: 0.5s;
  border: none;
  color: ${theme.grey300};
  padding: 0;

  .active > & {
    color: ${theme.white} !important;
    background-color: ${theme.colors.primary} !important;
  }

  &:hover {
    cursor: pointer;
    background-color: ${theme.grey400};
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  transition: 0.5s;
  filter: brightness(0.5);

  .active > button > & {
    filter: brightness(2);
  }
`;

const Text = styled.span`
  font-size: ${theme.fontSize.xs};
`;

const ButtonIcon = ({ icon, short, children }) => (
  <Button short={short}>
    <Icon icon={icon} />
    {!short && <Text>{children}</Text>}
  </Button>
);

export default ButtonIcon;

ButtonIcon.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string.isRequired,
  short: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  children: '',
  short: false,
};
