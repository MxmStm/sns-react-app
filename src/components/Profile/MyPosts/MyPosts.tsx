import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";
import {addPostAC, onPostChangeAC, ProfileAT} from "../../../redux/profile-reducer";

type MyPostsType = {
    statePosts: ProfilePageType
    dispatch: (action: ProfileAT) => void
}

export const MyPosts = (props: MyPostsType) => {
    const postsElements = props.statePosts.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch(onPostChangeAC(newPostElement.current.value))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.statePosts.newPostText}
                    />
                </div>
                <div>
                    <button
                        onClick={addPost}
                    >
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
