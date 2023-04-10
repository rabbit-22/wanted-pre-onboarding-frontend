import React, { useEffect, useState } from 'react';
import { isLoggedIn } from '../utils/isLoggedIn';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { createTodo } from '../api/todo';
import TodoList from '../components/todo/TodoList';
import useGetTodo from '../hooks/useGetTodo';

const TodoPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [todos, getTodos] = useGetTodo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = async () => {
    if (value === '') return;
    await createTodo(value);
    getTodos();
    setValue('');
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/signin');
    } else {
      getTodos();
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        margin: 3,
        flexDirection: 'column',
      }}
    >
      <Box>
        <input data-testid="new-todo-input" onChange={handleChange} />
        <button data-testid="new-todo-add-button" onClick={handleClick}>
          추가
        </button>
      </Box>
      <TodoList todoData={todos} />
    </Box>
  );
};

export default TodoPage;
