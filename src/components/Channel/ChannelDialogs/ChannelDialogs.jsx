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
        if (this.props.match.params.channelId !== this.state.channelId) {
            axios.get(`http://185.12.95.84:4444/channels/${this.props.match.params.channelId}/dialogs`).then(u => {
                this.setState({chndlg: u.data})
                console.log('otvetU', u.data)
                this.setState({channelId: this.props.match.params.channelId})
            })
        }
    }

    componentDidMount() {
        let channelId = this.props.match.params.channelId;
        this.setState({channelId: channelId})
        axios.get(`http://185.12.95.84:4444/channels/${channelId}/dialogs`).then(u => {
            this.setState({chndlg: u.data})
            console.log('otvetM', u.data)
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
                                <div className="content">
                                    <span>{c.last_message != undefined && c.last_message.message}</span>
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
