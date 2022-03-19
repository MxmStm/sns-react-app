import {DialogsPageType} from "./state";
import {ProfileAT} from "./profile-reducer";

export type DialogsAT = ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const dialogsReducer = (state: DialogsPageType, action: ProfileAT | DialogsAT): DialogsPageType => {
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