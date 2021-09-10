import React from 'react';
import styled from 'styled-components';
import Header from '../atoms/Header/Header';
import CardGrid from '../molecules/CardGrid/CardGrid';
import TaskCard from '../molecules/TaskCard/TaskCard';

const Wrapper = styled.div`
  padding-right: 40px;
  padding-bottom: 50px;
`;

const ToolBar = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin: 50px 0;
`;

const TasksTemplate = () => (
  <>
    <Wrapper>
      <ToolBar>
        <Header s>Your assigned tasks</Header>
      </ToolBar>
      <CardGrid>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </CardGrid>
    </Wrapper>
  </>
);

export default TasksTemplate;
