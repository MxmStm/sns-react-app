import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {DataAuthType} from "../../types/types";

type MapStatePropsType = {
    isAuth: boolean
    login: string | undefined
}
type MapDispatchPropsType = {
    setAuthUserData: (data: DataAuthType) => void
}
type MapPropsHeaderType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<MapPropsHeaderType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)