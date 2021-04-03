import React from 'react';
import styled from 'styled-components';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PropTypes from 'prop-types';
import { theme } from 'theme/MainTheme';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  font-size: ${theme.fontSize.xs};
  grid-template-columns: 20px auto;
  width: fit-content;
  border-radius: 5px;
  background-color: ${theme.colors.lightRed};
  padding: 5px 10px;
  color: ${theme.colors.red};
`;

const LeftTimeLabel = ({ children }) => (
  <Wrapper>
    <ScheduleIcon fontSize="inherit" />
    <p> {children} days left</p>
  </Wrapper>
);

export default LeftTimeLabel;

LeftTimeLabel.propTypes = {
  children: PropTypes.string.isRequired,
};
