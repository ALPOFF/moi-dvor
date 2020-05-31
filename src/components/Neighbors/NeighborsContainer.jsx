import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import add from './../../assets/images/add.png';
import './NeighborsContainer.scss'
import axios from "axios";
import Select from 'react-select';




const NeighborsContainer = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        axios.get(`http://185.12.95.84:4444/users/1`).then(u => {
            console.log(u.data)
            setUsers(u.data)
        })
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>

            <div className="myYard">
                <h3>Мой двор</h3>
                <h6>{users.length} участника</h6>
            </div>
            <div className="invite">
                <h4>Пригласить людей</h4>
                <img src={add} alt="" height={30}/>
            </div>
            <div className="neighbors">
                {users.map(c => <NavLink to={"/neighbors/profile/" + c.id}>
                    <div className="navItem">{c.first_name}</div>
                </NavLink>)}
            </div>
        </div>
    )
};

export default NeighborsContainer;
