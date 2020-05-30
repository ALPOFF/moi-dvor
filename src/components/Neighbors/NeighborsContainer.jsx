import React from "react";
import {NavLink} from "react-router-dom";
import add from './../../assets/images/add.png';
import './NeighborsContainer.scss'

const NeighborsContainer = () => {
    let users = [
        {userName: 'Ильяс Гарипов', userId: 0},
        {userName: 'Александр Дорохин', userId: 1},
        {userName: 'Валерий Калашников', userId: 2},
        {userName: 'Дмитрий Огородников', userId: 3}
    ]
    return (
<<<<<<< HEAD
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div className="myYard">
                <h3>Мой двор</h3>
                <h6>4 участника</h6>
            </div>
            <div className="invite">
                <h4>Пригласить людей</h4>
                <img src={add} alt="" height={30}/>
            </div>
            <div className="neighbors">
                {users.map(c => <NavLink to={"/neighbors/profile/" + c.userId}>
                    <div className="navItem">{c.userName}</div>
                </NavLink>)}
            </div>
=======
        <div>
            {users.map(c => <NavLink className="nav-item" to={"/neighbors/profile/" + c.userId}>
                <li style={{margin: '20px'}}>{c.userName}</li>
            </NavLink>)}
>>>>>>> dev-ilyas
        </div>
    )
};

export default NeighborsContainer;
