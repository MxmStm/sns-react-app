import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileInfoType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img*/}
                {/*    src={'https://i.pinimg.com/736x/36/82/54/368254d88128aa6ea8c27cd937984ded--zakopane-poland-summer-top-vacations.jpg'}*/}
                {/*    alt={'Profile'}*/}
                {/*/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile?.photos.large}
                    alt={"User's avatar"}
                />
                <ProfileStatus status={'Hello, my friend!'}/>
            </div>
        </div>
    )
}

export default ProfileInfo;