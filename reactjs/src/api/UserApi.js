import axiosClient from './axios';

const fetchAllUser = (page) => {
    const url = `/users?page=${page}`;
    return axiosClient.get(url);

}

const postCreateUser = (body) => {
    const url = '/users';
    return axiosClient.post(url, body);
}
export { fetchAllUser, postCreateUser }