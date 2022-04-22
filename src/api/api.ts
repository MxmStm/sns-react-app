import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '193fc14b-7133-4358-b157-8b260b27418c'}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    follow(userId: number) {
        return (
            instance.post(`follow/${userId}`)
        )
    },
    unfollow(userId: number) {
        return (
            instance.delete(`follow/${userId}`)
        )
    }
}

