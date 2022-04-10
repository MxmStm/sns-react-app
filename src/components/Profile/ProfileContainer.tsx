import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";
import {setUserProfile} from "../../redux/profile-reducer";

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type MapPropsProfileType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<MapPropsProfileType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
