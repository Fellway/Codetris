import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/atoms/Avatar/Avatar';
import { theme } from 'theme/MainTheme';

const StyledAvatar = styled(Avatar)`
  height: 25px;
  width: 25px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const More = styled.div`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background-color: ${theme.grey100};
  color: ${theme.grey400};
  font-size: ${theme.fontSize.xs};
  line-height: 25px;
  text-align: center;
`;

const Contributors = () => (
  <Wrapper>
    <StyledAvatar url="https://picsum.photos/id/237/200" />
    <StyledAvatar url="https://picsum.photos/id/238/200" />
    <StyledAvatar url="https://picsum.photos/id/254/200" />
    <More>+2</More>
  </Wrapper>
);

export default Contributors;
