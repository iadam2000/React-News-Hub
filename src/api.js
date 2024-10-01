import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://backend-project-u7dc.onrender.com/api",
    timeout: 50000,
});

export const fetchHandler = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.msg);
        } else {
            throw new Error("Error fetching data");
        }
    }
};

export const patchHandler = async (endpoint, body) => {
    try {
        const response = await apiClient.patch(endpoint, body);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.msg);
        } else {
            throw new Error("Error updating data");
        }
    }
}


