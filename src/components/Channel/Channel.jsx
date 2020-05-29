import React from "react";
import {NavLink} from "react-router-dom";

let chnlist = [
    {ch_title: '1. Общий', ch_id: 0},
    {ch_title: '2. Интересы', ch_id: 1},
    {ch_title: '3. Объявления', ch_id: 2},
    {ch_title: '4. Инициативы', ch_id: 3},
    {ch_title: '5. Сбор средств', ch_id: 4}
]

const Channel = () => {
    return (
        <div>
            <h4>Channels</h4>
            <ol>
            {chnlist.map(c => <NavLink to={"/messages/dialogs/" + c.ch_id}>
                <li style={{margin: '20px'}}>{c.ch_title}</li>
            </NavLink>)}
            </ol>
        </div>)}


export default Channel;
