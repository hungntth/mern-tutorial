import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:5000/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Do something before request is sent
        return response.data ? response.data : { statusCode: response.status };
    },
    function (error) {
        let res = {};
        if (error.response) {
            res.data = error.response.data;
            res.status = error.response.status;
            res.headers = error.response.headers;
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log(error.message);
        }
        // Do something with request error
        return res;
    }
);

export default axiosClient;
