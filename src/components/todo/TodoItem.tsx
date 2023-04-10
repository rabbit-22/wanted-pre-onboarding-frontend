import React, { useCallback, useState } from 'react';
import { TodoProps } from '../../types/todo';
import { updateTodo } from '../../api/todo';

/*
 * Todo 개별 요소
 */

interface ItemProps {
  todo: TodoProps;
}
const TodoItem = ({ todo }: ItemProps) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const handleCheck = useCallback(() => {
    updateTodo(todo.todo, !isChecked, todo.id);
    setIsChecked((prev) => !prev);
  }, [isChecked]);

  return (
    <li style={{ listStyle: 'none' }}>
      <label>
        <input
          type="checkbox"
          checked={isChecked || false}
          onChange={handleCheck}
        />
        <span style={{ marginLeft: 3 }}>{todo.todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
  );
};

export default TodoItem;
