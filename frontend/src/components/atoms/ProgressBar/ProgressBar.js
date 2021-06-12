import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { theme } from 'theme/MainTheme';

const handleColorType = (percent) => {
  if (percent < 25) {
    return theme.colors.red;
  }
  if (percent < 75) {
    return theme.colors.orange;
  }
  return theme.colors.green;
};

const Wrapper = styled.div`
  width: 100%;
`;

const BarWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ percent }) => `${percent}% auto`};
`;

const Progress = styled.div`
  height: 5px;
  background-color: ${({ percent }) => handleColorType(percent)};
  border-radius: 50px 0 0 50px;
`;

const LeftBar = styled.div`
  height: 5px;
  background-color: ${theme.grey300};
  border-radius: 0 50px 50px 0;
`;

const Text = styled.div`
  top: -20px;
  margin-bottom: 10px;
  margin-left: ${({ lm }) => `${lm}%`};
  font-size: ${theme.fontSize.xs};
`;

const ProgressBar = ({ children }) => (
  <Wrapper>
    <Text lm={children}>{children}%</Text>
    <BarWrapper percent={children}>
      <Progress percent={children} />
      <LeftBar />
    </BarWrapper>
  </Wrapper>
);

export default ProgressBar;

ProgressBar.propTypes = {
  children: PropTypes.string.isRequired,
};
