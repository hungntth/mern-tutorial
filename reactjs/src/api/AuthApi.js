import axiosClient from './axios';

const loginApi = (email, password) => {
    return axiosClient.post(`/auth/login`, { email, password });
}

const registerApi = (email, password) => {
    return axiosClient.post(`/auth/register`, { email, password });
}

export { loginApi, registerApi }