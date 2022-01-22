import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://cdn.siasat.com/wp-content/uploads/2021/05/Discord.jpg'}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
