import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function BasicInput({ placeholder }) {
  return (
    <form noValidate autoComplete="off">
      <TextField placeholder={placeholder} />
    </form>
  );
}
