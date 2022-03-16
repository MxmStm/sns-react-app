import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";

type ProfileType = {
    stateProfile: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                statePosts={props.stateProfile}
                dispatch={props.dispatch}
            />
        </div>
    )
}
