import React from "react";
import {addPostAC, onPostChangeAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()

                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }
                    const onPostChange = (text: string) => {
                        store.dispatch(onPostChangeAC(text))
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
            }
        </StoreContext.Consumer>
    )
}

