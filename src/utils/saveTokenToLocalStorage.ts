export const saveAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const getAccessTokenFromLocalStorage = (): string => {
  return localStorage.getItem('accessToken') || '';
};

export const removeAccessTokenFormLocalStorage = () => {
  localStorage.removeItem('accessToken');
};
