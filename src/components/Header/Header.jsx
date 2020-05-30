import React from "react";
import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <NavLink className="nav-item header-element" to="/channels">  
                <img className="inline-block" src="https://weboverhauls.github.io/demos/svg/checkmark.svg" width="30" alt=""/>
                <div className="inline-block">Каналы</div>
            </NavLink>
            <NavLink className="nav-item header-element" to="/neighbors">  
                <img className="inline-block" src="https://weboverhauls.github.io/demos/svg/checkmark.svg" width="30" alt=""/>
                <div className="inline-block">Соседи</div>
            </NavLink>
            <NavLink className="nav-item header-element" to="/messages">  
                <img className="inline-block" src="https://weboverhauls.github.io/demos/svg/checkmark.svg" width="30" alt=""/>
                <div className="inline-block">Сообщения</div>
            </NavLink>

            <NavLink className="nav-item header-element" to="/search">  
                <img className="inline-block" src="https://weboverhauls.github.io/demos/svg/checkmark.svg" width="30" alt=""/>
                <div className="inline-block">Поиск</div>
            </NavLink>

        </div>
    )
};

export default Header;
