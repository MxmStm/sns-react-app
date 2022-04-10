import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route
                        path={'/profile'}
                        element={<ProfileContainer/>}
                    />
                    <Route
                        path={'/profile/:userID'}
                        element={<ProfileContainer/>}
                    />
                    <Route
                        path={'/users'}
                        element={<UsersContainer/>}
                    />
                    <Route
                        path={'/dialogs/*'}
                        element={<DialogsContainer/>}
                    />
                    <Route
                        path={'/news'}
                        element={<News/>}
                    />
                    <Route
                        path={'/music'}
                        element={<Music/>}
                    />
                    <Route
                        path={'/setting'}
                        element={<Setting/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
