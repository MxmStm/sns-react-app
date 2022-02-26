import React from 'react';
import {addPost, state, subscribe, updateNewPostText} from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import App from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)


reportWebVitals();


