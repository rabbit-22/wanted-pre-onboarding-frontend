import axios from 'axios';
import { getAccessTokenFromLocalStorage } from '../utils/saveTokenToLocalStorage';

export const AuthAxios = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Tpye': 'application/json',
  },
});

AuthAxios.interceptors.request.use(
  (axios) => {
    const token = getAccessTokenFromLocalStorage();
    axios.headers.Authorization = `Bearer ${token}`;
    return axios;
  },
  (error) => {
    return Promise.reject(error);
  },
);
