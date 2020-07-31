import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bea80ea4-633b-475e-943d-c9b73efa3de0"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}



/*export const followAPI = {
    followUser(currentPage = 1, pageSize = 10){

    return instance.post(`follow/${u.id}`, {})
        .then(response => {
            return response.data;
        })
}*/
