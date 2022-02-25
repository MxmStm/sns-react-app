import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {

    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

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