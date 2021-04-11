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
  position: relative;
  width: 100%;
  height: 5px;
  margin-top: 45px;
  margin-bottom: 25px;
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
  position: absolute;
  top: -20px;
  left: ${({ lm }) => `${lm}%`};
  font-size: ${theme.fontSize.xs};
  transform: translateX(-50%);
`;

const ProgressBar = ({ children }) => (
  <Wrapper>
    <BarWrapper percent={children}>
      <Progress percent={children} />
      <LeftBar />
    </BarWrapper>
    <Text lm={children}>{children}%</Text>
  </Wrapper>
);

export default ProgressBar;

ProgressBar.propTypes = {
  children: PropTypes.string.isRequired,
};
