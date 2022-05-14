import {ComponentType} from "react";
import {InitialDialogsStateType, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: InitialDialogsStateType
}
type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}
export type MapPropsDialogsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps), withAuthRedirect
)(Dialogs)
