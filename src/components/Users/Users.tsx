import React from 'react';
import {MapPropsUsersType} from "./UsersContainer";
import s from './Users.module.css'

export const Users = (props: MapPropsUsersType) => {

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photoUrl}
                                alt={'Photo of user'}
                                className={s.userPhoto}
                            />
                        </div>
                        <div>
                            {u.followed
                                ? <button
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}
                                >
                                    Unfollow
                                </button>
                                : <button
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}
                                >Follow
                                </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

