import React from "react";
<<<<<<< HEAD
import {NavLink} from "react-router-dom";

let chnlist = [
    {ch_title: '11111', ch_id: 0},
    {ch_title: '222222', ch_id: 1},
    {ch_title: '333333', ch_id: 2},
    {ch_title: '4444', ch_id: 3},
    {ch_title: '5555', ch_id: 4},
    {ch_title: '6666', ch_id: 5},
    {ch_title: '7777', ch_id: 6},
    {ch_title: '88888', ch_id: 7},
]

const Channel = () => {
    return (
        <div>
            <h4>Channels</h4>
            {chnlist.map(c => <NavLink to={"/dialogs/" + c.ch_id}>
                <div style={{margin: '20px'}}>{c.ch_title}</div>
            </NavLink>)}
=======
import ChannelList from "./ChannelList/ChannelList";
import './Channel.scss'

const Channel = () => {
    return (
        <div className="channel">
            <h4>Каналы</h4>
            <ChannelList/>
>>>>>>> e5290dfc301f6e9ed0ed0583c4ac35fe60972551
        </div>
    )
};

export default Channel;
