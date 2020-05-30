import React from "react";
import {NavLink} from "react-router-dom";

const NeighborsContainer = () => {
    let users = [
        {userName: 'user1', userId: 0},
        {userName: 'user2', userId: 1},
        {userName: 'user3', userId: 2},
        {userName: 'user4', userId: 3},
        {userName: 'user5', userId: 4},
        {userName: 'user6', userId: 5},
    ]
    return (
        <div>
            {users.map(c => <NavLink to={"/neighbors/profile/" + c.userId}>
                <li style={{margin: '20px'}}>{c.userName}</li>
            </NavLink>)}
        </div>
    )
};

export default NeighborsContainer;
