import { getAccessTokenFromLocalStorage } from './saveTokenToLocalStorage';

export const isLoggedIn = () => {
  const userProfileResponse = getAccessTokenFromLocalStorage();
  return userProfileResponse !== '';
};
