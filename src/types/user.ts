export interface FormProps {
  email?: string;
  password?: string;
}

export type LoginResultWithToken =
  | {
      result: 'success';
      access_token: string;
    }
  | {
      result: 'fail';
      access_token: null;
    };
