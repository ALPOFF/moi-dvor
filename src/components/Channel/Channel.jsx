import React from "react";
import { NavLink } from "react-router-dom";
// import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import { List, ListItem, ListItemContent } from "react-mdl"
import './Channel.scss'

let chnlist = [
    { ch_title: '1. Общий', ch_id: 0 },
    { ch_title: '2. Интересы', ch_id: 1 },
    { ch_title: '3. Объявления', ch_id: 2 },
    { ch_title: '4. Инициативы', ch_id: 3 },
    { ch_title: '5. Сбор средств', ch_id: 4 }
]

const Channel = () => {
    return (
        <div>

            <h4>Channels</h4>
            <List style={{ width: '300px' }}>
                
                {chnlist.map(c => <NavLink className="nav-item" to={"/messages/dialogs/" + c.ch_id}>
                    <ListItem className="menu-item">
                        <ListItemContent>{c.ch_title}</ListItemContent>
                    </ListItem>
                </NavLink>)
                }

            </List>
            {/* <ol>
                {chnlist.map(c => <NavLink to={"/messages/dialogs/" + c.ch_id}>
                    <li style={{ margin: '20px' }}>{c.ch_title}</li>
                </NavLink>)}
            </ol> */}
            {/* 
            <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card> */}



        </div>

    )
}


export default Channel;
