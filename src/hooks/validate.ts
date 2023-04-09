import { FormProps } from '../types/user';

const validate = ({ email, password }: FormProps) => {
  const errors: FormProps = {};
  if (!email) {
    errors.email = '이메일을 입력해주세요';
  } else if (!email.includes('@')) {
    errors.email = '@을 포함해주세요';
  }
  if (!password) {
    errors.password = '비밀번호를 입력해주세요';
  } else if (password.length < 8) {
    errors.password = '8자 이상의 비밀번호를 입력해주세요';
  }
  return errors;
};

export default validate;
