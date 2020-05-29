import React from "react";
import {NavLink} from "react-router-dom";

let chndlg = [
    {chndlg_title: 'cd11111', chndlg_id: 0},
    {chndlg_title: 'cd222222', chndlg_id: 1},
    {chndlg_title: 'cd333333', chndlg_id: 2},
    {chndlg_title: 'cd4444', chndlg_id: 3},
    {chndlg_title: 'cd5555', chndlg_id: 4},
    {chndlg_title: 'cd6666', chndlg_id: 5},
    {chndlg_title: 'cd7777', chndlg_id: 6},
    {chndlg_title: 'cd88888', chndlg_id: 7},
]

const ChannelDialogs = () => {
    return (
        <div>
            <h4>Channel dialog Title</h4>
            {chndlg.map(c => <NavLink to={"/dialogs/channelId/" + c.chndlg_id}>
                <div style={{margin: '20px'}}>{c.chndlg_title}</div>
            </NavLink>)}
        </div>
    )
};

export default ChannelDialogs;
