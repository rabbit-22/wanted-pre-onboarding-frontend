import React, { useEffect, useState } from 'react';
import { isLoggedIn } from '../utils/isLoggedIn';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { createTodo } from '../api/todo';

const TodoPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value === '') return;
    createTodo(value);
  };
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/signin');
    }
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        margin: 3,
      }}
    >
      <input data-testid="new-todo-input" onChange={handleChange} />
      <button data-testid="new-todo-add-button" onClick={handleClick}>
        추가
      </button>
    </Box>
  );
};

export default TodoPage;
