import {DataAuthType} from "../types/types";

const initialAuthState = {
    data: null as DataAuthType | null,
    resultCode: null,
    message: [] as string[],
    isAuth: false
}

export type initialAuthStateType = typeof initialAuthState

export const authReducer = (state = initialAuthState, action: AuthAT): initialAuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataAuthType) => {
    return {
        type: 'SET-USER-DATA',
        data
    }
}

type AuthAT = ReturnType<typeof setAuthUserData>