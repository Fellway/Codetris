import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CalendarWrapper = styled.div`
  margin-top: 50px;
  margin-right: 50px;
`;

const CalendarTemplate = ({ children }) => <CalendarWrapper>{children}</CalendarWrapper>;

export default CalendarTemplate;

CalendarTemplate.propTypes = {
  children: PropTypes.string.isRequired,
};
