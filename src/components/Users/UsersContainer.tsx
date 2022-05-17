import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    InitialUsersStateType, setCurrentPage, toggleIsFollowingProgress, requestUsers, follow, unfollow
} from "../../redux/users-reducer";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";

type MapStatePropsType = {
    usersPage: InitialUsersStateType
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}
export type MapPropsUsersType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<MapPropsUsersType> {
    componentDidMount() {
        this.props.requestUsers(
            this.props.usersPage.currentPage,
            this.props.usersPage.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(
            pageNumber,
            this.props.usersPage.pageSize
        )
    }

    render() {
        return (
            <>
                {this.props.usersPage.isFetching
                    ? <Preloader/>
                    : null}
                <Users
                    totalUsersCount={this.props.usersPage.totalUsersCount}
                    pageSize={this.props.usersPage.pageSize}
                    currentPage={this.props.usersPage.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.usersPage.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.usersPage.followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleIsFollowingProgress, requestUsers
    }))(UsersContainer)
