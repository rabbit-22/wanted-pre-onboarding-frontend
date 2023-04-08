import React from 'react';
import { Button } from '@mui/material';

/**
 * 로그인, 회원가입 버튼
 */

interface Props {
  title: string;
  'data-testid': string;
}

const FormButton = (props: Props) => {
  return (
    <Button
      data-testid={props['data-testid']}
      sx={{ mt: 1, backgroundColor: '#575DFB', height: 50 }}
      variant="contained"
    >
      {props.title}
    </Button>
  );
};

export default FormButton;
