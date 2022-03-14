import React from 'react';
import {store} from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import App from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            /*state={store.getState()}
            addPost={store.addPost}
            updateNewPostText={store.updateNewPostText}*/
            store={store}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)


reportWebVitals();


