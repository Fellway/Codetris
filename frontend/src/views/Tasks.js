import React from 'react';
import UserPageTemplate from '../components/templates/UserPageTemplate';
import TasksTemplate from '../components/templates/TasksTemplate';

const Tasks = () => (
  <>
    <UserPageTemplate>
      <TasksTemplate />
    </UserPageTemplate>
  </>
);

export default Tasks;
