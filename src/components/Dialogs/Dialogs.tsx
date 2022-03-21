import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {DialogsAT, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsType = {
    stateDialogs: DialogsPageType
    dispatch: (action: DialogsAT) => void
}

const Dialogs = (props: DialogsType) => {
    const dialogsElements = props.stateDialogs.dialogs.map(d =>
        <DialogItem name={d.name} id={(d.id)}/>)
    const messagesElements = props.stateDialogs.messages.map(m =>
        <Message message={m.message}/>)
    const newMessageBody = props.stateDialogs.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder={'Enter your message'}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;