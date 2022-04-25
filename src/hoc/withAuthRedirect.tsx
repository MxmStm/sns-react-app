import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    class RedirectComponent extends React.Component<MapStatePropsType> {
        render() {
            let {isAuth, ...restProps} = this.props
            if (!isAuth) {
                return <Navigate to={'/login'}/>
            }
            return <Component {...restProps as T}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}
