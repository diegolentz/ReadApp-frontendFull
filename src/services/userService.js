import axios from "axios";

// @ts-ignore
const API_URL = import.meta.env.VITE_API_URL;

class UserService {

    async fetchUserData(userId) {
        const res = await axios.get(`${API_URL}/user/${userId}`);
        return res.data;
    }

    async updateUserData(userId, data) {
        const res = await axios.post(`${API_URL}/user/${userId}`, { ...data });
        return res.data;
    }

    async updateUserMoney(userId, amount) {
        const res = await axios.post(
            `${API_URL}/user/${userId}/money`,
            JSON.stringify(Number(amount)),
            { headers: { "Content-Type": "application/json" } }
        );
        return res.data;
    }

    async updateUserImg(userId, img) {
        const res = await axios.post(
            `${API_URL}/user/${userId}/img`,
            JSON.stringify(img),
            { headers: { "Content-Type": "application/json" } }
        );
        return res.data;
    }
}

export const userService = new UserService();