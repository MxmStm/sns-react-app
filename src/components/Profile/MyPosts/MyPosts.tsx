import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MapPropsMyPostType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const MyPosts = (props: MapPropsMyPostType) => {
    const postsElements = props.profilePage.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (value: FormDataPostType) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type FormDataPostType = {
    newPostText: string
}

const AddNewPostForm = (props: InjectedFormProps<FormDataPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newPostText'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataPostType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
