import axios from 'axios';

export const AuthAxios = (token: string) => {
  return axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Tpye': 'application/json',
    },
  });
};
