import {PostType, ProfilePageType} from "./store";
import {DialogsAT} from "./dialogs-reducer";

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20}
    ],
    newPostText: 'NEW POST',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileAT | DialogsAT): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
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

export type ProfileAT = ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>