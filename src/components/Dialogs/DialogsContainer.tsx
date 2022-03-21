import React, {ChangeEvent} from "react";
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsContainerType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerType) => {
    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageBodyAC(e.target.value))
    }

    return (
        <Dialogs
            sendMessage={onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
            dialogsPage={state}
        />
    )
}
