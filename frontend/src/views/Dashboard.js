import React from 'react';
import DemoDashboardImage from 'assets/dashboard-demo.png';
import UserPageTemplate from '../components/templates/UserPageTemplate';
import RawTemplate from '../components/templates/RawTemplate';

const Dashboard = () => (
  <>
    <UserPageTemplate>
      <RawTemplate image={DemoDashboardImage} />
    </UserPageTemplate>
  </>
);

export default Dashboard;
