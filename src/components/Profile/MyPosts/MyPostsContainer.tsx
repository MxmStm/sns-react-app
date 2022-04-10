import {addPostAC, InitialProfileStateType, onPostChangeAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    profilePage: InitialProfileStateType
}
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
export type MapPropsMyPostType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(onPostChangeAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

