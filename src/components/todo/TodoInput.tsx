import { Box } from '@mui/material';
import React, { useCallback, useContext, useState } from 'react';
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

  const handleClick = useCallback(
    async (todo: string) => {
      if (todo === '') return;
      await createTodo(todo);
      getTodos();
      setValue('');
    },
    [getTodos],
  );

  return (
    <Box>
      <input
        data-testid="new-todo-input"
        onChange={handleChange}
        value={value}
      />
      <button
        data-testid="new-todo-add-button"
        onClick={() => handleClick(value)}
      >
        추가
      </button>
    </Box>
  );
};

export default React.memo(TodoInput);
