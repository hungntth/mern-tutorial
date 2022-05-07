import axiosClient from './axios';

const fetchAllUser = (page) => {
    const url = `/users?page=${page}`;
    return axiosClient.get(url);

}

const postCreateUser = (body) => {
    const url = '/users';
    return axiosClient.post(url, body);
}

const putUpdateUser = (id, body) => {
    const url = `/users/${id}`;
    return axiosClient.put(url, body);
}

const deleteUser = (id) => {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
}


export { fetchAllUser, postCreateUser, putUpdateUser, deleteUser }