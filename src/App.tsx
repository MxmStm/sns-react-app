import React, {ComponentType} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/store";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}
type MapPropsAppType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<MapPropsAppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

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
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {initializeApp}), withRouter)(App);
