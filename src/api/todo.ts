import { TodoProps } from '../types/todo';
import { AuthAxios } from './authAxios';
import { getAccessTokenFromLocalStorage } from '../utils/saveTokenToLocalStorage';

type DeleteResult = 'success' | 'fail';

let token = getAccessTokenFromLocalStorage();

export const createTodo = async (todo: string) => {
  try {
    const createRes = await AuthAxios(token).post<TodoProps>('/todos', {
      todo,
    });
    const responseOK = createRes && createRes.status === 201;
    if (responseOK) {
      return createRes.data;
    }
  } catch (e: any) {
    console.log(e);
  }
};

export const getTodo = async () => {
  try {
    const getRes = await AuthAxios(token).get<TodoProps[]>('/todos');
    const responseOK = getRes && getRes.status === 200;
    if (responseOK) {
      return getRes.data;
    }
  } catch (e: any) {
    console.log(e);
  }
};

export const updateTodo = async (
  todo: string,
  isCompleted: boolean,
  id: number,
) => {
  try {
    const updateRes = await AuthAxios(token).put<TodoProps>(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    const responseOK = updateRes && updateRes.status === 200;
    if (responseOK) {
      return updateRes.data;
    }
  } catch (e: any) {
    console.log(e);
  }
};

export const deleteTodo = async (id: number): Promise<DeleteResult> => {
  try {
    const deleteRes = await AuthAxios(token).delete<TodoProps>(`/todos/${id}`);
    const responseOK = deleteRes && deleteRes.status === 204;
    if (responseOK) {
      return 'success';
    }
  } catch (e: any) {
    console.log(e);
  }
  return 'fail';
};
