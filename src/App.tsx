import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {HashRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersConnect} from "./components/Users/UsersContainer";

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
                            element={<Profile/>}
                        />
                        <Route
                            path={'/Profile'}
                            element={<Profile/>}
                        />
                        <Route
                            path={'/Users'}
                            element={<UsersConnect/>}
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
