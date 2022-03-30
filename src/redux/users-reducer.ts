import {UsersType} from "../types/types";

const initialUsersState = {
    users: [] as UsersType[]
}

export type InitialUsersStateType = typeof initialUsersState

export const usersReducer = (state = initialUsersState, action: UsersAT): InitialUsersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: true}
                    : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: false}
                    : u)
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.user],
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId,
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId,
    } as const
}
export const setUsersAC = (user: UsersType[]) => {
    return {
        type: 'SET-USERS',
        user,
    } as const
}

type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>

type UsersAT = FollowAT | UnfollowAT | SetUsersAT