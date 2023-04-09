import React, { useEffect } from 'react';
import { isLoggedIn } from '../utils/isLoggedIn';
import { useNavigate } from 'react-router-dom';

const TodoPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/signin');
    }
  }, []);
  return <div></div>;
};

export default TodoPage;
