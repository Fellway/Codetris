import React from 'react';
import UserPageTemplate from '../components/templates/UserPageTemplate';
import DashboardTemplate from '../components/templates/DashboardTemplate';

const Dashboard = () => (
  <>
    <UserPageTemplate>
      <DashboardTemplate />
    </UserPageTemplate>
  </>
);

export default Dashboard;
