import React, {useEffect} from "react";
import Header from "./Header/Header";
import Channel from "./Channel/Channel";
import ChannelDialogs from "./Channel/ChannelDialogs/ChannelDialogs";
import SelectedDialog from "./Channel/SelectedDialog/SelectedDialog";
import NeighborsContainer from "./Neighbors/NeighborsContainer";
import Profile from "./Neighbors/Profile/Profile";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";

const AppContainer = (props) => {


    if (props.userId === null) return <Redirect to={"/auth"}/>
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Header/>
            <div className="Channel">
                <Route path='/channels/'
                       render={() => <div className="ChannelItem" style={{flex: 1}}><Channel/></div>}/>
                <Route path='/channels/:channelId/'
                       render={() => <div className="ChannelItem" style={{flex: 2}}><ChannelDialogs/></div>}/>
                <Route path='/channels/dialogs/:dialogId?'
                       render={() => <div className="ChannelItem" style={{flex: 2}}><SelectedDialog/></div>}/>
                <Route path='/neighbors/'
                       render={() => <div className="ChannelItem" style={{flex: 1}}><NeighborsContainer/></div>}/>
                <Route path='/neighbors/profile/:userId?/'
                       render={() => <div className="ChannelItem" style={{flex: 5}}><Profile/></div>}/>
            </div>
        </div>

    )
};

let mapStateToProps = (state) => ({
    userId: state.appReducer.userId
})

export default connect( mapStateToProps, {})(AppContainer);
