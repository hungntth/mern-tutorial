import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:5000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Do something before request is sent
        return response;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default axiosClient;