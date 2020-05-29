import React from "react";
import ChannelList from "./ChannelList/ChannelList";
import './Channel.scss'

const Channel = () => {
    return (
        <div className="channel">
            <h4>Каналы</h4>
            <ChannelList/>
        </div>
    )
};

export default Channel;
