import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to={'/Profile'}
                         className={(navData => navData.isActive ? s.activeLink : s.item)}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/Users'}
                         className={(navData => navData.isActive ? s.activeLink : s.item)}>Users</NavLink>
            </div>
            <div>
                <NavLink to={'/Dialogs'}
                         className={(navData => navData.isActive ? s.activeLink : s.item)}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/News'} className={(navData => navData.isActive ? s.activeLink : s.item)}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/Music'} className={(navData => navData.isActive ? s.activeLink : s.item)}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/Setting'}
                         className={(navData => navData.isActive ? s.activeLink : s.item)}>Setting</NavLink>
            </div>
        </nav>
    )
}

