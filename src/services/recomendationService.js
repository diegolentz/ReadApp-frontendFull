import axios from "axios";

// @ts-ignore
const API_URL = import.meta.env.VITE_API_URL;

class RecomendationService {
    async getRecommendations() {
        const res = await axios.get(`${API_URL}/recomendations`);
        return res.data;
    }


}

export const recomendationService = new RecomendationService();