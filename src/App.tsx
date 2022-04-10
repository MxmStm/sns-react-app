import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {HashRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <HashRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route
                            path={'/'}
                            element={<ProfileContainer/>}
                        />
                        <Route
                            path={'/Profile/*'}
                            element={<ProfileContainer/>}
                        />
                        <Route
                            path={'/Users'}
                            element={<UsersContainer/>}
                        />
                        <Route
                            path={'/Dialogs/*'}
                            element={<DialogsContainer/>}
                        />
                        <Route path={'/News'} element={<News/>}/>
                        <Route path={'/Music'} element={<Music/>}/>
                        <Route path={'/Setting'} element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
