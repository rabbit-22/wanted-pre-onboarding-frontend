import React, { useContext } from 'react';
import { deleteTodo } from '../../api/todo';
import { TodoContext } from '../../pages/TodoPage';

/**
 * Todo 요소 삭제 버튼
 */

const DeleteButton = ({ id }: { id: number }) => {
  const { getTodos } = useContext(TodoContext);
  const handleClick = async () => {
    await deleteTodo(id);
    getTodos();
  };

  return (
    <button onClick={handleClick} data-testid="delete-button">
      삭제
    </button>
  );
};

export default DeleteButton;
