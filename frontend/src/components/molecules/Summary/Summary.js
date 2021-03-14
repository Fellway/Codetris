import Avatar from 'components/atoms/Avatar/Avatar';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';

const Wrapper = styled.summary`
  display: inline-grid;
  grid-template-columns: auto auto;
  align-items: center;
`;

const Text = styled.p`
  width: fit-content;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.xs};
  color: ${theme.grey100};
  margin-left: 20px;
  margin-right: 5px;
`;

const Summary = () => (
  <Wrapper>
    <Avatar url="https://picsum.photos/200" />
    <Text>Antony Mark</Text>
  </Wrapper>
);

export default Summary;
