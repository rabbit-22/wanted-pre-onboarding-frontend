import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getAccessTokenFromLocalStorage,
  removeAccessTokenFormLocalStorage,
} from '../utils/saveTokenToLocalStorage';

/**
 * 메인 페이지
 */

const HomePage = () => {
  const [isToken, setIsToken] = useState(false);
  const token = getAccessTokenFromLocalStorage();
  useEffect(() => {
    if (token === '') setIsToken(false);
    else setIsToken(true);
  }, [token]);

  const handleClick = () => {
    removeAccessTokenFormLocalStorage();
    setIsToken(false);
  };
  return (
    <>
      {isToken ? (
        <>
          <Link to="/todo" style={{ textDecoration: 'none' }}>
            <Button>TODO</Button>
          </Link>
          <Button onClick={handleClick}>로그아웃</Button>
        </>
      ) : (
        <>
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Button>로그인</Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button>회원가입</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default HomePage;
