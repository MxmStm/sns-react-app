import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MapPropsDialogsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const Dialogs = (props: MapPropsDialogsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name} id={(d.id)}/>)
    const messagesElements = props.dialogsPage.messages.map(m =>
        <Message message={m.message}/>)
    const addNewMessage = (value: FormDataDialogsType) => {
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type FormDataDialogsType = {
    newMessageBody: string
}

const AddMessageForm = (props: InjectedFormProps<FormDataDialogsType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newMessageBody'}
                    placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataDialogsType>({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;