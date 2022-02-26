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
import {StateType, updateNewPostText} from "./redux/state";

type AppType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function App(props: AppType) {
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
                                    stateDialogs={props.state.dialogsPage}
                                />
                            }
                        />
                        <Route
                            path={'/Profile'}
                            element={
                                <Profile
                                    stateProfile={props.state.profilePage}
                                    addPost={props.addPost}
                                    updateNewPostText={props.updateNewPostText}
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
