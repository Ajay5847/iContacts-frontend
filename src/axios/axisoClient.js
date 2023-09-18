import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:4200',
    withCredentials: true,
});

axiosClient.interceptors.response.use(async (response) => {
    const data = response.data;
    if (data.status === "ok") {
        return data;
    }
    const error = data.result;
    return Promise.reject(error);
}, async (error) => {
    return Promise.reject(error);
});

