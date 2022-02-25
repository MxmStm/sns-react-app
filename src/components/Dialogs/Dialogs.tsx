import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Rob'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Dima'}
    ]
    let messages = [
        {id: 1, name: 'Hi!'},
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'What do you do?'},
        {id: 4, name: 'Yo'},
        {id: 5, name: 'Yo'}
    ]

    let dialogsElements = dialogs.map(d =>
        <DialogItem name={d.name} id={(d.id)}/>)
    let messagesElements = messages.map(m =>
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