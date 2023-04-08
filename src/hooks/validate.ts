interface Props {
  email?: string;
  password?: string;
}

const validate = ({ email, password }: Props) => {
  const errors: Props = {};
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
