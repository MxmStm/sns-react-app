import React, {JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProfileType} from "../../types/types";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userID: number) => void
}
type MapPropsProfileType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<MapPropsProfileType> {
    componentDidMount() {
        //@ts-ignore
        let userID = this.props.router.params.userID
        if (!userID) {
            userID = 15
        }
        this.props.getUserProfile(userID)
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'}/>
        }
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
    getUserProfile
})(withRouter(ProfileContainer))
