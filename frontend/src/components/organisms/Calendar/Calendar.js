import React from 'react';
import styled from 'styled-components';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { theme } from '../../../theme/MainTheme';

const FullCalendarWrapper = styled.div`
  z-index: 0;
  width: 100%;
  font-size: ${theme.fontSize.m};

  .fc-today-button:disabled {
    background-color: ${theme.grey400};
  }

  .fc-button {
    background-color: ${theme.grey400};
  }

  .fc-toolbar-title,
  .fc-col-header-cell-cushion,
  .fc-daygrid-day-number {
    color: ${theme.colors.primary};
  }

  .fc-daygrid-day {
    height: 20px;
  }

  .tr {
    height: 20px;
  }

  .fc-event-main {
    background-color: ${theme.colors.secondary};
  }

  .fc-day-today {
    background-color: ${theme.colors.primaryOpacity} !important;
  }
`;

const CalendarComponent = () => (
  <FullCalendarWrapper>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      contentHeight="700px"
      events={[
        { title: 'example event 1', date: '2021-09-12' },
        { title: 'example event 2', date: '2021-09-13' },
      ]}
    />
  </FullCalendarWrapper>
);

export default CalendarComponent;
