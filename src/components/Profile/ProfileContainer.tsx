import React, {ComponentType, JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProfileType} from "../../types/types";
import {getUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null
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
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
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

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
