import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://backend-project-u7dc.onrender.com/api",
    timeout: 1000,
});

export const fetchArticleList = async () => {
    try {
        const response = await apiClient.get("/articles");
        return response.data.articles;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};
