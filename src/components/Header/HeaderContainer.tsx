import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getAuthUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string | undefined
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
}
type MapPropsHeaderType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<MapPropsHeaderType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data?.login
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)