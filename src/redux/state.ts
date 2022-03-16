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
    name: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
type AddPostAT = {
    type: 'ADD-POST'
}
type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ActionsType = AddPostAT | UpdateNewPostTextAT
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    dispatch: (action: ActionsType) => void
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
            newPostText: 'NEW POST'
        },
        dialogsPage: {
            messages: [
                {id: 1, name: 'Hi!'},
                {id: 2, name: 'How are you?'},
                {id: 3, name: 'What do you do?'},
                {id: 4, name: 'Yo'},
                {id: 5, name: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Max'},
                {id: 2, name: 'Bob'},
                {id: 3, name: 'Rob'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Dima'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
}

//store - OOP

