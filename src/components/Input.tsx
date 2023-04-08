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
  'data-testid': string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any; //eslint-disable-line no-unused-vars
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
        data-testid={props['data-testid']}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
