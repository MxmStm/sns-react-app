import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

type MyPostsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    statePosts: PostType[]
    newPostText: string
}

export const MyPosts = (props: MyPostsType) => {
    const postsElements = props.statePosts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
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
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button
                        onClick={onAddPost}
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
