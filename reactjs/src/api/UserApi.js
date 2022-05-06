import axiosClient from './axios';

const fetchAllUser = (page) => {
    const url = `/users?page=${page}`;
    return axiosClient.get(url);

}
export { fetchAllUser }