import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppType = {
    store: StoreType
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
                                <DialogsContainer
                                    store={props.store}
                                />
                            }
                        />
                        <Route
                            path={'/Profile'}
                            element={
                                <Profile
                                    store={props.store}
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
