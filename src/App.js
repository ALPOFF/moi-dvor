import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import NeighborsContainer from "./components/Neighbors/NeighborsContainer";
import Profile from "./components/Neighbors/Profile/Profile";
import Channel from "./components/Channel/Channel";
import ChannelDialogs from "./components/Channel/ChannelDialogs/ChannelDialogs";
import SelectedDialog from "./components/Channel/SelectedDialog/SelectedDialog";
const App = () => {
    const [channelList, setChannelList] = useState([]);

    useEffect(() => {
    }, []);

    return (
  
        <div className="AppContainer">
            <Header/>
            <div className="Channel">
                <Route path='/messages/'
                       render={() => <div className="ChannelItem" style={{flex: 1}}><Channel/></div>}/>
                <Route path='/messages/dialogs/:channelId?/'
                       render={() => <div className="ChannelItem" style={{flex: 2}}><ChannelDialogs/></div>}/>
                <Route path='/messages/dialogs/channelId/:dialogId?'
                       render={() => <div className="ChannelItem" style={{flex: 2}}><SelectedDialog/></div>}/>
                <Route path='/neighbors/'
                       render={() => <div className="ChannelItem" style={{flex: 1}}><NeighborsContainer/></div>}/>
                <Route path='/neighbors/profile/:userId?/'
                       render={() => <div className="ChannelItem" style={{flex: 5}}><Profile/></div>}/>
            </div>
        </div>
    )
};

export default App;
