import axios from 'axios';
import { getAccessTokenFromLocalStorage } from '../utils/saveTokenToLocalStorage';

let token = getAccessTokenFromLocalStorage();
if (token !== '') {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
