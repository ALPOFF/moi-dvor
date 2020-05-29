import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Channel from "./components/Channel/Channel";
import ChannelDialogs from "./components/Channel/ChannelDialogs/ChannelDialogs";
import SelectedDialog from "./components/Channel/SelectedDialog/SelectedDialog";
import {Route} from "react-router-dom";
import BodyContainer from "./components/Channel/BodyContainer";
import NeighborsContainer from "./components/Neighbors/NeighborsContainer";

const App = () => {
    const [channelList, setChannelList] = useState([]);

    useEffect(() => {
        //запрос
        //получаем список каналов
        // setChannelList([
        //     {ch_title: '11111'},
        //     {ch_title: '222222'},
        //     {ch_title: '333333'},
        //     {ch_title: '4444'},
        //     {ch_title: '5555'},
        //     {ch_title: '6666'},
        //     {ch_title: '7777'},
        //     {ch_title: '88888'}])
    }, []);

    return (
        <div className="AppContainer">
            <Header/>
            <Route path='/messages' render={() => <BodyContainer/>}/>
            <Route path='/neighbors' render={() => <NeighborsContainer/>}/>
        </div>
    )
};

export default App;
