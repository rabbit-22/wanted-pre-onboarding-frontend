import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 메인 페이지
 */

const HomePage = () => {
  const handleClick = () => {
    localStorage.removeItem('accessToken');
  };
  return (
    <div>
      <Link to="/signin" style={{ textDecoration: 'none' }}>
        <Button>로그인</Button>
      </Link>
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        <Button>회원가입</Button>
      </Link>
      <Link to="/todo" style={{ textDecoration: 'none' }}>
        <Button>TODO</Button>
      </Link>
      <Button onClick={handleClick}>로그아웃</Button>
    </div>
  );
};

export default HomePage;
