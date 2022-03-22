import React from 'react';
import {store} from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from './StoreContext';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        /*<StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>*/
        <Provider store={store}>
            <App/>
        </Provider>
        , document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe((rerenderEntireTree))

reportWebVitals();


