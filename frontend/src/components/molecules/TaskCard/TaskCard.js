import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import Avatar from 'components/atoms/Avatar/Avatar';

const Wrapper = styled.div`
  color: ${theme.grey100};
  width: 220px;
  height: 150px;
  background-color: ${theme.grey450};
  border-radius: 10px;
  font-size: ${theme.fontSize.xs};
  padding: 15px;
  display: grid;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.7), 0 15px 12px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.fontWeight.bold};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Description = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: ;
`;

const TaskId = styled.div`
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.bold};
`;

const CardFooter = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  width: 100%;
`;

const StyledAvatar = styled(Avatar)`
  justify-self: end;
  width: 25px;
  height: 25px;
`;

const TaskCard = () => (
  <Wrapper>
    <Title>Test card</Title>
    <Description>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </Description>
    <CardFooter>
      <TaskId>COT-24</TaskId>
      <StyledAvatar
        circle
        url="https://media.istockphoto.com/photos/serene-beauty-picture-id1083617440?k=6&m=1083617440&s=612x612&w=0&h=wLq7N87zwUamnN1g1BebCxYdt3BVU8bhEyCSymDFyFI="
      />
    </CardFooter>
  </Wrapper>
);

export default TaskCard;
