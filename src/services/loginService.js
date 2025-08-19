import axios from 'axios';

class LoginService {

    async login(userData) {
        const res = await axios.post("http://localhost:8080/login", userData);
        return res.data;
    }
}

export const loginService = new LoginService();
