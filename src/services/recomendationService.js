import axios from "axios";

// @ts-ignore
const API_URL = import.meta.env.VITE_API_URL;

class RecomendationService {
    async getRecommendations(page) {
        const res = await axios.get(`${API_URL}/recomendations?page=${page}&size=10`);
        return res.data;
    }
    
    async getMyRecommendations() {
        const id = sessionStorage.getItem("user");
        const res = await axios.get(`${API_URL}/my-recomendations?userId=${id}`);
        console.log("My Recommendations fetched:", res.data);
        return res.data;
    }
    
    async searchMyRecommendationsByText(text) {
        const id = sessionStorage.getItem("user");
        const res = await axios.get(`${API_URL}/my-recomendations/search?userId=${id}&text=${encodeURIComponent(text)}`);
        return res.data;
    }
    async rateRecommendation(recId, rate, comment) {
        const id = sessionStorage.getItem("user");
        const res = await axios.post(`${API_URL}/recomendations/rate`, {
            userId: id,
            recommendationId: recId,
            rate: rate,
            comment: comment
        });
        return res.data;
    }

}

export const recomendationService = new RecomendationService();