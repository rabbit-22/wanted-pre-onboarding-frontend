import React from 'react';
import { TextField } from '@mui/material';

/**
 * 입력창
 */

interface Props {
  mb: number;
  name: string;
  label: string;
  type: string;
}

const Input = (props: Props) => {
  return (
    <>
      <TextField
        sx={{ mb: props.mb }}
        name={props.name}
        required
        label={props.label}
        variant="outlined"
        type={props.type}
      />
    </>
  );
};

export default Input;
