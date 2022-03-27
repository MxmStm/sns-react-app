type LocationType = {
    city: string
    country: string
}
type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType

}

const initialUsersState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Max',
            status: 'I am student',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: false,
            fullName: 'Dima',
            status: 'I am student',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'Alex',
            status: 'I am student',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ] as UsersType[]
}

type InitialUsersStateAT = typeof initialUsersState

export const usersReducer = (state: InitialUsersStateAT = initialUsersState, action: UsersAT): InitialUsersStateAT => {
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