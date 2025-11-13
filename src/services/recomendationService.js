import axios from "axios";

// @ts-ignore
const API_URL = import.meta.env.VITE_API_URL;

class RecomendationService {
    async getRecommendations(page) {
        const res = await axios.get(`${API_URL}/recomendations?page=${page}&size=10`);
        console.log("Recomendations fetched:", res.data);
        return res.data;
    }


}

export const recomendationService = new RecomendationService();