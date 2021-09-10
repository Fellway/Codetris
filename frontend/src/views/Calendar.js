import React from 'react';

import UserPageTemplate from '../components/templates/UserPageTemplate';
import CalendarComponent from '../components/organisms/Calendar/Calendar';
import CalendarTemplate from '../components/templates/CalendarTemplate';

const Calendar = () => (
  <>
    <UserPageTemplate>
      <CalendarTemplate>
        <CalendarComponent />
      </CalendarTemplate>
    </UserPageTemplate>
  </>
);

export default Calendar;
