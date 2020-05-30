import React from "react";
import './Header.scss'
import {NavLink} from "react-router-dom";
<<<<<<< HEAD
import Button from "@material-ui/core/Button";
import Profile from "../Neighbors/Profile";
import ProfileWindow from "../ProfileWindow/ProfileWindow";
=======
import threads from '../../assets/images/header-images/threads.png';
import neighbors from '../../assets/images/header-images/neighbors.png';
import messages from '../../assets/images/header-images/messages.png';
import search from '../../assets/images/header-images/search.png';
import bell from '../../assets/images/header-images/bell.png';
>>>>>>> dev-ilyas

const Header = () => {
    return (
        <div className="header">
            <div className="tabs-wrapper">
                <NavLink className="nav-item header-element" to="/channels">  
                    <img className="inline-block" src={threads} width="30" alt=""/>
                    <div className="inline-block">Каналы</div>
                </NavLink>
                <NavLink className="nav-item header-element" to="/neighbors">  
                    <img className="inline-block" src={neighbors} width="30" alt=""/>
                    <div className="inline-block">Соседи</div>
                </NavLink>
                <NavLink className="nav-item header-element" to="/messages">  
                    <img className="inline-block" src={messages} width="30" alt=""/>
                    <div className="inline-block">Сообщения</div>
                </NavLink>

                <NavLink className="nav-item header-element" to="/search">  
                    <img className="inline-block" src={search} width="30" alt=""/>
                    <div className="inline-block">Поиск</div>
                </NavLink>
            </div>
            <div className="user-profile-wrapper">
                <NavLink className="nav-item header-element profile-container" to="/bell">  
                    <img className="inline-block ding-dong" src={bell} width="30" alt=""/>

                </NavLink>
                <NavLink className="nav-item header-element profile-container" to="/profile">  
                    <div className="inline-block"><div className="circle"><div className="circle-item">A</div></div></div>
                    <div className="inline-block">Профиль</div>
                </NavLink>
            </div>


<<<<<<< HEAD
            <NavLink to="/neighbors">
                <div>Соседи</div>
            </NavLink>

            <ProfileWindow />
=======
>>>>>>> dev-ilyas
        </div>
    )
};

export default Header;
