import React from 'react';
import {Navigate} from "react-router-dom";

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }

    return RedirectComponent
}
