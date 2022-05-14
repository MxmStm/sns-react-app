import {DataAuthType} from "../types/types";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {stopSubmit} from "redux-form";

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
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataAuthType | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA', payload: {data, isAuth}
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data, true))
                }
            })
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    const message = response.data.message.length > 0 ? response.data.message[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}
export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, false))
                }
            })
    }
}

type AuthAT = ReturnType<typeof setAuthUserData>
type StopSubmitType = ReturnType<typeof stopSubmit>
type ThunkType = ThunkAction<void, AppStateType, unknown, CommonActionType>

type CommonActionType = AuthAT | StopSubmitType
