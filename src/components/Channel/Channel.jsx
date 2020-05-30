import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
// import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import { List, ListItem, ListItemContent } from "react-mdl"
import './Channel.scss'
import plus from '../../assets/images/left-tab/plus.png';
import axios from "axios";

// let chnlist = [
//     { ch_title: '1. Общий', ch_id: 0, color: '#5D9FDC' },
//     { ch_title: '2. Интересы', ch_id: 1, color: '#5DDC9F'},
//     { ch_title: '3. Объявления', ch_id: 2, color: '#DC5DA9' },
//     { ch_title: '4. Инициативы', ch_id: 3, color: '#A5A5A5' },
//     { ch_title: '5. Сбор средств', ch_id: 4, color: '#BBBE16' }
// ]

const Channel = () => {
    const [chnlist, setChnlist] = useState([]);

    useEffect(() => {
        axios.get(`http://185.12.95.84:4444/channels`).then(u => {
            console.log(u.data);
            setChnlist(u.data)
        })
    }, []);
    return (
        <div style={{height: '100%'}}>
            <div className="channels-list">
                <header>
                    <h4 className="channel-header" style={{marginTop: '10px'}}>Каналы</h4>
                    <img src={plus} alt="add-new-channel"/>
                </header>
                <List className="channel" style={{ width: '300px' }}>

                    {chnlist.map(c => <NavLink  to={"/channels/" + c.id}>
                        <ListItem  style={{margin: '25px 0'}} className="menu-item">
                            <ListItemContent><span style={{ color: c.color, padding: '10px 20px' }}>#</span>{c.name}</ListItemContent>
                        </ListItem>
                    </NavLink>)
                    }

                </List>
            </div>




        </div>

    )
}


export default Channel;
