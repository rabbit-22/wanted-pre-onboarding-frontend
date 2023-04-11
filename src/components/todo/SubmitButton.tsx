import React, { useContext } from 'react';
import { TodoProps } from '../../types/todo';
import { TodoContext } from '../../pages/TodoPage';
import { updateTodo } from '../../api/todo';

const SubmitButton = ({
  todo,
  setIsModify,
  value,
}: {
  todo: TodoProps;
  setIsModify: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
}) => {
  const { getTodos } = useContext(TodoContext);

  const handleClick = async () => {
    await updateTodo(value, todo.isCompleted, todo.id);
    getTodos();
    setIsModify(false);
  };

  return (
    <button
      style={{ marginRight: 3 }}
      data-testid="submit-button"
      onClick={handleClick}
    >
      제출
    </button>
  );
};

export default SubmitButton;

//todo: string,isCompleted: boolean,id: number,
