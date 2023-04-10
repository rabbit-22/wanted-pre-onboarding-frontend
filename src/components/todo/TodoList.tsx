import React from 'react';
import { TodoProps } from '../../types/todo';
import TodoItem from './TodoItem';

interface Props {
  todoData: TodoProps[];
}
const TodoList = ({ todoData }: Props) => {
  return (
    <ul style={{ paddingLeft: 0 }}>
      {todoData &&
        todoData.map((todo: TodoProps) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </ul>
  );
};

export default React.memo(TodoList);
