import React, {ComponentType, JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProfileType} from "../../types/types";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}
type MapDispatchPropsType = {
    getUserProfile: (userID: number) => void
    getUserStatus: (userID: number) => void
    updateStatus: (status: string) => void
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
        this.props.getUserStatus(userID)
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
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
        getUserProfile,
        getUserStatus,
        updateStatus
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
