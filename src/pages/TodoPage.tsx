import React, { useEffect, createContext } from 'react';
import { isLoggedIn } from '../utils/isLoggedIn';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import TodoList from '../components/todo/TodoList';
import useGetTodo from '../hooks/useGetTodo';
import { TodoContextProps } from '../types/todo';
import TodoInput from '../components/todo/TodoInput';

/**
 * Todo 페이지
 */

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  getTodos: () => {},
});

const TodoPage = () => {
  const navigate = useNavigate();
  const [todos, getTodos] = useGetTodo();

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
      <TodoContext.Provider value={{ todos: todos, getTodos: getTodos }}>
        <TodoInput />
        <TodoList todoData={todos} />
      </TodoContext.Provider>
    </Box>
  );
};

export default TodoPage;
