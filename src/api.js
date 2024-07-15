// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newpro-uid1.onrender.com',
  withCredentials: true, // Important to include cookies in requests
});

export const login = async () => {
  const response = await api.post('/login');
  console.log(response)
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

export const refreshToken = async () => {
  const res = await api.post('/refresh');
  console.log("refresh token received", res)
};