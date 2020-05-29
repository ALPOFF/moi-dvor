import React from "react";
import Channel from "./Channel";
import ChannelDialogs from "./ChannelDialogs/ChannelDialogs";
import SelectedDialog from "./SelectedDialog/SelectedDialog";
import {Route} from "react-router-dom";

const BodyContainer = () => {
    return (
        <div className="Channel">
            <Route path='/messages/' render={() => <div className="ChannelItem" style={{flex: 1}}><Channel/></div>}/>
            <Route path='/messages/dialogs/:channelId?/' render={() => <div className="ChannelItem" style={{flex: 2}}><ChannelDialogs/></div>}/>
            <Route path='/messages/dialogs/channelId/:dialogId?' render={() => <div className="ChannelItem" style={{flex: 2}}><SelectedDialog/></div>}/>
        </div>
    )
};

export default BodyContainer;
