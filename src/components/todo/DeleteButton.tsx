import React, { useCallback, useContext } from 'react';
import { deleteTodo } from '../../api/todo';
import { TodoContext } from '../../pages/TodoPage';

/**
 * Todo 요소 삭제 버튼
 */

const DeleteButton = ({ id }: { id: number }) => {
  const { getTodos } = useContext(TodoContext);
  const handleClick = useCallback(
    async (todoid: number) => {
      await deleteTodo(todoid);
      getTodos();
    },
    [getTodos],
  );

  return (
    <button onClick={() => handleClick(id)} data-testid="delete-button">
      삭제
    </button>
  );
};

export default DeleteButton;
