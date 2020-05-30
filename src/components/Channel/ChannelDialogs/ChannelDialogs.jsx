import React, {Component, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import './ChannelDialogs.scss';
import newthread from '../../../assets/images/threads-tab/newthread.png';
import axios from "axios";
import {withRouter} from "react-router-dom";

class ChannelDialogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chndlg: [],
            channelId: null
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let channelId = this.props.match.params.channelId;
        console.log(this.state.channelId)
        console.log(channelId)
        if (this.props.match.params.channelId !== this.state.channelId) {
            axios.get(`http://185.12.95.84:4444/channels/${channelId}/dialogs`).then(u => {
                console.log(u.data);
                this.setState({chndlg: u.data})
                this.setState({channelId: this.props.match.params.channelId})
            })
        }
    }

    componentDidMount() {
        let channelId = this.props.match.params.channelId;
        this.setState({channelId: channelId})
        console.log(channelId);
        axios.get(`http://185.12.95.84:4444/channels/${channelId}/dialogs`).then(u => {
            console.log('1111111111111111111')
            console.log('channelDialogs', u.data);
            console.log('1111111111111111111')
            this.setState({chndlg: u.data})
            console.log(this.state.chndlg)
        })
    }
    render() {
        return (
            <div className="threads-tab-container">
                <div className="add-new-thread-wrapper">
                    <h3>Начать новый тред</h3>
                    <img src={newthread} alt=""/>
                </div>
                <div className="threads-list-wrapper">
                    <header>
                    </header>

                    <main className="threads-list">
                        <div className="thread-list-item">
                            {this.state.chndlg.map(c => <NavLink to={"/channels/dialogs/" + c.id}>
                                <div className="thread-item-title" style={{margin: '20px'}}><h4>{c.name}</h4></div>
                                <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                                    atque magni quos deleniti quae dolor et aliquam. Sequi ipsam soluta explicabo quas,
                                    adipisci quasi magni exercitationem illum inventore cupiditate nostrum mollitia
                                    corporis ab maxime nulla tempora cumque placeat veniam distinctio asperiores
                                    perferendis.
                                </div>
                                <div className="badge">#3 Объявления</div>
                                <hr/>
                            </NavLink>)
                            }
                        </div>
                    </main>

                </div>
            </div>
        )
    }
}

export default withRouter(ChannelDialogs);
