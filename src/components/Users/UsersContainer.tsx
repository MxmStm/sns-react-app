import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    follow,
    InitialUsersStateType,
    setCurrentPage, toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import {UsersType} from "../../types/types";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
    usersPage: InitialUsersStateType
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type MapPropsUsersType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<MapPropsUsersType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer)
