import { FormProps, LoginResultWithToken } from '../types/user';
import { saveAccessTokenToLocalStorage } from '../utils/saveTokenToLocalStorage';
import { BASE_URL } from './constant';
import axios from 'axios';

type LoginResult = 'success' | 'fail';

export const signup = async (args: FormProps): Promise<LoginResult> => {
  const options = {
    method: 'POST',
    url: `${BASE_URL}/auth/signup`,
    headers: {
      'Content-Tpye': 'application/json',
    },
    data: {
      email: args.email,
      password: args.password,
    },
  };
  const signupRes = await axios(options);
  const responseOK = signupRes && signupRes.status === 201;
  if (responseOK) {
    return 'success';
  }
  return 'fail';
};

export const login = async (args: FormProps): Promise<LoginResultWithToken> => {
  const options = {
    method: 'POST',
    url: `${BASE_URL}/auth/signin`,
    headers: {
      'Content-Tpye': 'application/json',
    },
    data: args,
  };
  const loginRes = await axios(options);
  const responseOK = loginRes && loginRes.status === 200;
  if (responseOK) {
    saveAccessTokenToLocalStorage(loginRes.data.access_token);
    return {
      result: 'success',
      access_token: loginRes.data.access_token,
    };
  }
  return {
    result: 'fail',
    access_token: null,
  };
};
