import React from "react";
import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <NavLink className="nav-item" to="/messages">
                <div>Сообщения</div>
            </NavLink>

            <NavLink className="nav-item" to="/neighbors">
                <div>Соседи</div>
            </NavLink>
        </div>
    )
};

export default Header;
