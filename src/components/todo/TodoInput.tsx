import { Box } from '@mui/material';
import React, { useContext, useState } from 'react';
import { TodoContext } from '../../pages/TodoPage';
import { createTodo } from '../../api/todo';

/**
 * Todo 입력창
 */

const TodoInput = () => {
  const [value, setValue] = useState('');
  const { getTodos } = useContext(TodoContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = async () => {
    if (value === '') return;
    await createTodo(value);
    getTodos();
    setValue('');
  };

  return (
    <Box>
      <input data-testid="new-todo-input" onChange={handleChange} />
      <button data-testid="new-todo-add-button" onClick={handleClick}>
        추가
      </button>
    </Box>
  );
};

export default TodoInput;
