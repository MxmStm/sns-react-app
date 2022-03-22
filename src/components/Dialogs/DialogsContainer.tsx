import React, {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogsPage

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }
                    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(updateNewMessageBodyAC(e.target.value))
                    }

                    return (
                        <Dialogs
                            sendMessage={onSendMessageClick}
                            updateNewMessageBody={onNewMessageChange}
                            dialogsPage={state}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}
