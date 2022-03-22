import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MapPropsMyPostType} from "./MyPostsContainer";

export const MyPosts = (props: MapPropsMyPostType) => {
    const postsElements = props.profilePage.posts.map(p =>
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
                        value={props.profilePage.newPostText}
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
