import axios from 'axios';

// @ts-ignore
const API_URL = import.meta.env.VITE_API_URL;

class LoginService {
  async login(userData) {
    const res = await axios.post(`${API_URL}/login`, userData);
    return res.data;
  }
}

export const loginService = new LoginService();