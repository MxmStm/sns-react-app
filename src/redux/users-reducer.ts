import {UsersType} from "../types/types";

const initialUsersState = {
    users: [] as UsersType[],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
                users: action.user,
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId,
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId,
    } as const
}
export const setUsers = (user: UsersType[]) => {
    return {
        type: 'SET-USERS',
        user,
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount,
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}

type FollowAT = ReturnType<typeof follow>
type UnfollowAT = ReturnType<typeof unfollow>
type SetUsersAT = ReturnType<typeof setUsers>
type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>

type UsersAT = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT