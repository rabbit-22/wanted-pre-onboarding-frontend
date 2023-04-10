import axios from 'axios';
import { TodoProps } from '../types/todo';
import { BASE_URL } from './constant';

type DeleteResult = 'success' | 'fail';

export const createTodo = async (todo: string) => {
  try {
    const options = {
      method: 'POST',
      url: `${BASE_URL}/todos`,
      headers: {
        'Content-Tpye': 'application/json',
      },
      data: { todo },
    };
    const createRes = await axios<TodoProps>(options);
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
    const options = {
      method: 'GET',
      url: `${BASE_URL}/todos`,
    };
    const getRes = await axios<TodoProps[]>(options);
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
    const options = {
      method: 'PUT',
      url: `${BASE_URL}/todos/${id}`,
      headers: {
        'Content-Tpye': 'application/json',
      },
      data: { todo, isCompleted },
    };
    const updateRes = await axios<TodoProps>(options);
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
    const options = {
      method: 'DELETE',
      url: `${BASE_URL}/todos/${id}`,
    };
    const deleteRes = await axios<TodoProps>(options);
    const responseOK = deleteRes && deleteRes.status === 204;
    if (responseOK) {
      return 'success';
    }
  } catch (e: any) {
    console.log(e);
  }
  return 'fail';
};
