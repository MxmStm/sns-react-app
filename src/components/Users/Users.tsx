import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../types/types";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersComponentType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: UsersType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
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
                                    onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {'API-KEY': '193fc14b-7133-4358-b157-8b260b27418c'}
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })

                                    }}
                                >
                                    Unfollow
                                </button>
                                : <button
                                    onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {'API-KEY': '193fc14b-7133-4358-b157-8b260b27418c'}
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })

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
