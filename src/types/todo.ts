export interface TodoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
export interface TodoContextProps {
  todos: TodoProps[];
  getTodos: () => Promise<void> | void;
}
