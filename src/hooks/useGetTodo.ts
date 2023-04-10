import { useCallback, useState } from 'react';
import { getTodo } from '../api/todo';
import { TodoProps } from '../types/todo';

export default function useGetTodo(): [TodoProps[], () => Promise<void>] {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const getTodos = useCallback(async () => {
    const res = await getTodo();
    setTodos(res!);
  }, []);

  return [todos, getTodos];
}
