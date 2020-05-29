import React from "react";
import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <NavLink className="navbar_item_container" to="/messages">
                <div className="menutext">Сообщения</div>
            </NavLink>

            <NavLink className="navbar_item_container" to="/neighbors">
                <div className="menutext">Соседи</div>
            </NavLink>
        </div>
    )
};

export default Header;
