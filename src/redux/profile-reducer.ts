import {PostType, ProfilePageType} from "./state";
import {DialogsAT} from "./dialogs-reducer";

export type ProfileAT = ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>

export const profileReducer = (state: ProfilePageType, action: ProfileAT | DialogsAT): ProfilePageType => {
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
