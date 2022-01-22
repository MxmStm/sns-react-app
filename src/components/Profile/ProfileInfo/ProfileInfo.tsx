import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'https://i.pinimg.com/736x/36/82/54/368254d88128aa6ea8c27cd937984ded--zakopane-poland-summer-top-vacations.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;