import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostAC, onPostChangeAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerType) => {
    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(onPostChangeAC(text))
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            statePosts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}
