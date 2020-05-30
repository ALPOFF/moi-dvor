import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import BodyContainer from "./components/Channel/BodyContainer";
import NeighborsContainer from "./components/Neighbors/NeighborsContainer";
import Profile from "./components/Neighbors/Profile";
import Channel from "./components/Channel/Channel";

const App = () => {
    const [channelList, setChannelList] = useState([]);

    useEffect(() => {
    }, []);

    return (
        <div className="AppContainer">
            <Header/>
            <Route path='/messages' render={() => <BodyContainer/>}/>
            <div className="Channel">
<<<<<<< HEAD
            <Route path='/neighbors' render={() => <div className="ChannelItem" style={{flex: 1}}><NeighborsContainer/></div>}/>
            <Route path='/neighbors/profile/:userId?/' render={() => <div className="ChannelItem" style={{flex: 5}}><Profile/></div>}/>
=======
                <Route path='/neighbors' render={() => <NeighborsContainer/>}/>
                <Route path='/neighbors/profile/:userId?/' render={() => <Profile/>}/>
>>>>>>> dev-ilyas
            </div>
        </div>
    )
};

export default App;
