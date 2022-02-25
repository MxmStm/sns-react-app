import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {
    stateDialogs: DialogsPageType
}

const Dialogs = (props: DialogsType) => {
    let dialogsElements = props.stateDialogs.dialogs.map(d =>
        <DialogItem name={d.name} id={(d.id)}/>)
    let messagesElements = props.stateDialogs.messages.map(m =>
        <Message message={m.name}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;