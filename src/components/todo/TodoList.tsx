import React, { useContext } from 'react';
import { TodoProps } from '../../types/todo';
import TodoItem from './TodoItem';
import { TodoContext } from '../../pages/TodoPage';

/**
 * Todo 목록
 */

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul style={{ paddingLeft: 0 }}>
      {todos &&
        todos.map((todo: TodoProps) => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
};

export default TodoList;
