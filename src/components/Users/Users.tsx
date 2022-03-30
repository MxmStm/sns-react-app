import React from "react";
import userPhoto from "../../assets/images/user.png";
import s from "./Users.module.css";
import axios from "axios";
import {MapPropsUsersType} from "./UsersContainer";

export class Users extends React.Component<MapPropsUsersType> {

    constructor(props: MapPropsUsersType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photos.small != null
                                    ? u.photos.small
                                    : userPhoto}
                                alt={'User'}
                                className={s.userPhoto}
                            />
                        </div>
                        <div>
                            {u.followed
                                ? <button
                                    onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}
                                >
                                    Unfollow
                                </button>
                                : <button
                                    onClick={() => {
                                        this.props.follow(u.id)
                                    }}
                                >Follow
                                </button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}