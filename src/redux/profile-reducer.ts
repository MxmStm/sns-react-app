import {PostType, ProfileType} from "../types/types";
import {DialogsAT} from "./dialogs-reducer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const initialProfileState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
    ] as PostType[],
    profile: null as ProfileType | null,
    status: ''
}

export type InitialProfileStateType = typeof initialProfileState

export const profileReducer = (state = initialProfileState, action: ProfileAT | DialogsAT): InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0
                }]
            }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: 'SET-USER-STATUS',
        status
    } as const
}

export type ProfileAT = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>

export const getUserProfile = (userID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userID)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getUserStatus = (userID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userID)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}
