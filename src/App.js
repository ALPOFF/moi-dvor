import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Channel from "./components/Channel/Channel";
import ChannelDialogs from "./components/Channel/ChannelDialogs/ChannelDialogs";
import SelectedDialog from "./components/Channel/SelectedDialog/SelectedDialog";

const App = () => (
    <div className="AppContainer">
        <Header/>
        <div className="Channel">
            <div className="ChannelItem" style={{flex: 1}}><Channel/></div>
            <div className="ChannelItem" style={{flex: 2}}><ChannelDialogs/></div>
            <div className="ChannelItem" style={{flex: 2}}><SelectedDialog/></div>
        </div>
    </div>
);

export default App;
