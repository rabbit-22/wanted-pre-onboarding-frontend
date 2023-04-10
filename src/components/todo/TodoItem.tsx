import React from 'react';
import { TodoProps } from '../../types/todo';

/*
 * Todo 개별 요소
 */

interface ItemProps {
  todo: TodoProps;
}
const TodoItem = ({ todo }: ItemProps) => {
  return (
    <li style={{ listStyle: 'none' }}>
      <label>
        <input type="checkbox" />
        <span style={{ marginLeft: 3 }}>{todo.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
