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

export const profileAPI = {
    getProfile(userID: number) {
        return (
            instance.get('profile/' + userID)
        )
    },
    getStatus(userID: number) {
        return (
            instance.get('profile/status/' + userID)
        )
    },
    updateStatus(status: string) {
        return (
            instance.put('profile/status', {status: status})
        )
    }
}

export const authAPI = {
    me() {
        return (
            instance.get('auth/me')
        )
    },
    login(email: string, password: string, rememberMe: boolean) {
        return (
            instance.post('auth/login', {email, password, rememberMe})
        )
    },
    logout() {
        return (
            instance.delete('auth/login')
        )
    }
}
