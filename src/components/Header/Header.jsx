import React from "react";
import './Header.scss'
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Profile from "../Neighbors/Profile";
import ProfileWindow from "../ProfileWindow/ProfileWindow";

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/messages">
                <div>Сообщения</div>
            </NavLink>

            <NavLink to="/neighbors">
                <div>Соседи</div>
            </NavLink>

            <ProfileWindow />
        </div>
    )
};

export default Header;
