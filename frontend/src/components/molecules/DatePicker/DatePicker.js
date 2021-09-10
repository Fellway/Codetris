import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = React.useState(Date.now);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
