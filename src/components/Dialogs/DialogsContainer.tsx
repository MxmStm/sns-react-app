import {ChangeEvent} from "react";
import {InitialDialogsStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: InitialDialogsStateType
    isAuth: boolean
}
type MapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
export type MapPropsDialogsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageBodyAC(e.target.value))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
