import React, { useContext } from 'react';
import { TodoProps } from '../../types/todo';
import { TodoContext } from '../../pages/TodoPage';
import { updateTodo } from '../../api/todo';

/**
 *  TodoList 수정 버튼 클릭 시 활성화되는 제출 버튼
 */
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
    if (value !== '') {
      await updateTodo(value, todo.isCompleted, todo.id);
      getTodos();
    }
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
