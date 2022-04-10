import {PostType, ProfileType} from "../types/types";
import {DialogsAT} from "./dialogs-reducer";

const initialProfileState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
    ] as PostType[],
    newPostText: 'NEW POST' as string,
    profile: null as ProfileType | null
}

export type InitialProfileStateType = typeof initialProfileState

export const profileReducer = (state = initialProfileState, action: ProfileAT | DialogsAT): InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }],
                newPostText: ''
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const onPostChangeAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export type ProfileAT = ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof setUserProfile>