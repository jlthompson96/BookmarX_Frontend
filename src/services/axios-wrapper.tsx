import axios from 'axios';
import { URLs } from '../common/constants';


const headers: Readonly<Record<string, string | boolean>> = {
    'Content-Type': 'application/json',
};

const api = axios.create({
    baseURL: URLs.BASE_URL,
    headers: headers,
});

api.interceptors.request.use(
    (config) => {
        // Add any request-specific logic here, such as token authentication
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Add any response-specific logic here
        return response;
    },
    (error) => {
        // Add error handling logic here
        return Promise.reject(error);
    }
);



export default api;