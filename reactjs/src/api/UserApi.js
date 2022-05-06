import axiosClient from './axios';

const fetchAllUser = () => {
    const url = "/users";
    return axiosClient.get(url);

}
export { fetchAllUser }