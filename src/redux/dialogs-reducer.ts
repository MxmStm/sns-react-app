import {ProfileAT} from "./profile-reducer";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}

const initialDialogsState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What do you do?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ] as MessageType[],
    newMessageBody: '' as string,
    dialogs: [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Rob'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Dima'},
    ] as DialogType[],
}

export type InitialDialogsStateType = typeof initialDialogsState

export const dialogsReducer = (state: InitialDialogsStateType = initialDialogsState, action: ProfileAT | DialogsAT): InitialDialogsStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.body
            }
        case "SEND-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {
                    id: 6, message: state.newMessageBody
                }],
                newMessageBody: ''
            }
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

export type DialogsAT = ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>