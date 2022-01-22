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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Max'} id={1}/>
                <DialogItem name={'Bob'} id={2}/>
                <DialogItem name={'Rob'} id={3}/>
                <DialogItem name={'Sasha'} id={4}/>
                <DialogItem name={'Dima'} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'How are you?'}/>
                <Message message={'What do you do?'}/>
            </div>
        </div>
    )
}

export default Dialogs;