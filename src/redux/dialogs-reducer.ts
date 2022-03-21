import {DialogsPageType} from "./store";
import {ProfileAT} from "./profile-reducer";

const initialState = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ProfileAT | DialogsAT): DialogsPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case "SEND-MESSAGE":
            state.messages.push({id: 6, message: state.newMessageBody})
            state.newMessageBody = ''
            return state
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