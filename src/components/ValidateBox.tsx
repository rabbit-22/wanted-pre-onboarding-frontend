import React from 'react';
import { Box } from '@mui/material';

/**
 * 로그인, 회원가입 유효성 검증 문구
 */

type WrapperProps = {
  children: React.ReactNode;
  top?: number;
  bottom?: number;
};
const ValidateBox = (props: WrapperProps) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: props.top,
        bottom: props.bottom,
        fontSize: 13,
        color: 'red',
      }}
    >
      {props.children}
    </Box>
  );
};

export default ValidateBox;
