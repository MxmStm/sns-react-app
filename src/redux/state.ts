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
}
export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 20}
        ]
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
}
