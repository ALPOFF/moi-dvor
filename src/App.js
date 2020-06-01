import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Redirect, Route} from "react-router-dom";
import NeighborsContainer from "./components/Neighbors/NeighborsContainer";
import Profile from "./components/Neighbors/Profile/Profile";
import Channel from "./components/Channel/Channel";
import ChannelDialogs from "./components/Channel/ChannelDialogs/ChannelDialogs";
import SelectedDialog from "./components/Channel/SelectedDialog/SelectedDialog";
import axios from "axios";
import {connect} from "react-redux";
import {setAllInterests, setUserProfileById, setUserProfileInt} from "./state/app-reducer";
import Auth from "./components/Auth/Auth";
import AppContainer from "./components/AppContainer";
const App = (props) => {
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        axios.get(`http://185.12.95.84:4444/interests`).then(u => {
            let interests = []
            u.data.interests.forEach(i => interests.push({label: i.name, value: i.id}))
            props.setAllInterests(interests)
            console.log('LLL', interests[0])
        })
    }, []);

    return (
        <div className="AppContainer">
            <Route path='/auth' render={() => <Auth />}/>
            <AppContainer />
        </div>
    )
};

export default connect(null, {setUserProfileInt, setUserProfileById, setAllInterests})(App);
