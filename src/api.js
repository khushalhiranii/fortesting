// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newpro-five-chi.vercel.app',
  withCredentials: true, // Important to include cookies in requests
});

export const login = async () => {
  const response = await api.post('/login');
  return response.data;
};

export const fetchUserData = async () => {
  try {
    const response = await api.get('/user-data');
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      await refreshToken();
      return fetchUserData();
    }
    throw error;
  }
};

const refreshToken = async () => {
  await api.post('/refresh-token');
};