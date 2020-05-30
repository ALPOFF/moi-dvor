import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import BodyContainer from "./components/Channel/BodyContainer";
import NeighborsContainer from "./components/Neighbors/NeighborsContainer";
import Profile from "./components/Neighbors/Profile";

const App = () => {
    const [channelList, setChannelList] = useState([]);

    useEffect(() => {
    }, []);

    return (
        <div className="AppContainer">
            <Header/>
            <Route path='/messages' render={() => <BodyContainer/>}/>
            <div className="Channel">
            <Route path='/neighbors' render={() => <NeighborsContainer/>}/>
            <Route path='/neighbors/profile/:userId?/' render={() => <Profile/>}/>
            </div>
        </div>
    )
};

export default App;
