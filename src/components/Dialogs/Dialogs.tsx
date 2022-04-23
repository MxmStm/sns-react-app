import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MapPropsDialogsType} from "./DialogsContainer";
import {Navigate} from "react-router-dom";

const Dialogs = (props: MapPropsDialogsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name} id={(d.id)}/>)
    const messagesElements = props.dialogsPage.messages.map(m =>
        <Message message={m.message}/>)
    const newMessageBody = props.dialogsPage.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e)
    }

    if (!props.isAuth) {
        return <Navigate to={'/login'}/>
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