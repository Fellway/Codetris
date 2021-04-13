import React from 'react';
import styled from 'styled-components';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PropTypes from 'prop-types';
import { theme } from 'theme/MainTheme';

const handleBackgroundColor = (timeLeft) => {
  if (timeLeft < 3) {
    return theme.colors.lightRed;
  }
  if (timeLeft < 6) {
    return theme.colors.lightOrange;
  }
  return theme.colors.lightGreen;
};

const handleFontColor = (timeLeft) => {
  if (timeLeft < 3) {
    return theme.colors.red;
  }
  if (timeLeft < 6) {
    return theme.colors.orange;
  }
  return theme.colors.green;
};

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  font-size: ${theme.fontSize.xs};
  grid-template-columns: 20px auto;
  width: fit-content;
  border-radius: 5px;
  background-color: ${({ timeLeft }) => handleBackgroundColor(Number(timeLeft))};
  padding: 5px 10px;
  color: ${({ timeLeft }) => handleFontColor(Number(timeLeft))};
`;

const LeftTimeLabel = ({ children }) => (
  <Wrapper timeLeft={children}>
    <ScheduleIcon fontSize="inherit" />
    <p> {children} days left</p>
  </Wrapper>
);

export default LeftTimeLabel;

LeftTimeLabel.propTypes = {
  children: PropTypes.string.isRequired,
};
