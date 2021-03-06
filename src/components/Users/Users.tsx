import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../types/types";
import {NavLink} from "react-router-dom";

type UsersComponentType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: UsersType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersComponentType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? s.selectedPage : s.page}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/Profile/' + u.id}>
                                <img
                                    src={u.photos.small != null
                                        ? u.photos.small
                                        : userPhoto}
                                    alt={'User'}
                                    className={s.userPhoto}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}
                                >
                                    Unfollow
                                </button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
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
};
