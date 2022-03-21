import {ProfileAT, profileReducer} from "./profile-reducer";
import {DialogsAT, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    messages: MessageType[]
    newMessageBody: string
    dialogs: DialogType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    dispatch: (action: ProfileAT | DialogsAT) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 20}
            ],
            newPostText: 'NEW POST',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What do you do?'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: '',
            dialogs: [
                {id: 1, name: 'Max'},
                {id: 2, name: 'Bob'},
                {id: 3, name: 'Rob'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Dima'},
            ],
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state changed')
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
}




