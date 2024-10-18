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
};

export const postHandler = async (endpoint, body) => {
    try {
        const response = await apiClient.post(endpoint, body);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.msg);
        } else {
            throw new Error("Error updating data");
        }
    }
}

export const deleteHandler = async (endpoint) => {
    try {
        const response = await apiClient.delete(endpoint);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.msg);
        } else {
            throw new Error("Error Deleting data");
        }
    }
}

export function timeSincePosted(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + " years ago";
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " months ago";
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + " days ago";
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + " hours ago";
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " minutes ago";
    return seconds < 30 ? "just now" : seconds + " seconds ago";
}