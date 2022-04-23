import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

function App() {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route
                        path={'/*'}
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
                    <Route
                        path={'/login'}
                        element={<Login/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
