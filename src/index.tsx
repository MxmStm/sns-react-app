import React from 'react';
import {store} from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import App from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe((rerenderEntireTree))

reportWebVitals();


