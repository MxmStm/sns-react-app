import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {StoreType} from "./redux/store";

type AppType = {
    store: StoreType
}

function App(props: AppType) {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route
                            path={'/Dialogs/*'}
                            element={
                                <Dialogs
                                    stateDialogs={state.dialogsPage}
                                    dispatch={props.store.dispatch.bind(props.store)}
                                />
                            }
                        />
                        <Route
                            path={'/Profile'}
                            element={
                                <Profile
                                    stateProfile={state.profilePage}
                                    dispatch={props.store.dispatch.bind(props.store)}
                                />
                            }
                        />
                        <Route path={'/News'} element={<News/>}/>
                        <Route path={'/Music'} element={<Music/>}/>
                        <Route path={'/Setting'} element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
