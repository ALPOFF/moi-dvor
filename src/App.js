import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import NeighborsContainer from "./components/Neighbors/NeighborsContainer";
import Profile from "./components/Neighbors/Profile/Profile";
import Channel from "./components/Channel/Channel";
import ChannelDialogs from "./components/Channel/ChannelDialogs/ChannelDialogs";
import SelectedDialog from "./components/Channel/SelectedDialog/SelectedDialog";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileById, setUserProfileInt} from "./state/app-reducer";
const App = (props) => {
    const [channelList, setChannelList] = useState([]);

    useEffect(() => {
        axios.get(`http://185.12.95.84:4444/user/3`).then(u => {
            console.log('uinfo', u.data);
            let newInterestArr = []
            u.data.interests.forEach(i => newInterestArr.push({'label': i.name, value: i.id}))
            props.setUserProfileInt(newInterestArr)
            props.setUserProfileById(u.data)
        })
    }, []);

    return (
        <div className="AppContainer">
            <Header/>
            <div className="Channel">
                <Route path='/channels/'
                       render={() => <div className="ChannelItem" style={{flex: 1}}><Channel/></div>}/>
                <Route path='/channels/:channelId?/'
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

export default connect(null, {setUserProfileInt, setUserProfileById})(App);
