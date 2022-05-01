import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";

export type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfileInfoType) => {
    return (
        <div className={s.content}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}
