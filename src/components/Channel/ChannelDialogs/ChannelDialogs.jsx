import React, { Component, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './ChannelDialogs.scss';
import newthread from '../../../assets/images/threads-tab/newthread.png';
import axios from "axios";
import { withRouter } from "react-router-dom";

class ChannelDialogs extends Component {
    constructor(props) {
        super(props);
        this.generateNewThread = this.generateNewThread.bind(this);
        this.state = {
            chndlg: [],
            channelId: null,
            newThreadActive: false,
            threadName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({ channelId: channelId })
        console.log(channelId);
        axios.get(`http://185.12.95.84:4444/channels/${channelId}/dialogs`).then(u => {
            console.log('1111111111111111111')
            console.log('channelDialogs', u.data);
            console.log('1111111111111111111')
            this.setState({ chndlg: u.data })
            console.log(this.state.chndlg)
        });

    }

    generateNewThread() {
        console.log("new-thread");

        this.setState({ newThreadActive: true });
        let threadContainer = document.getElementById("new-thread");
        // threadContainer.innerHTML

    }

    handleChange(event) {
        this.setState({threadName: event.target.value});
        console.log(event.target.value);
    }

    handleSubmit(event) {

        axios.post(`http://185.12.95.84:4444/dialogs`, {name: this.state.threadName, channel_id: this.state.channelId }).then(u => {
            console.log('otvetM', u.data);
        })
        alert('Отправленное имя: ' + this.state.threadName);
        event.preventDefault();
    }

    render() {
        return (
            <div className="threads-tab-container">
                <div onClick={this.generateNewThread} className="add-new-thread-wrapper" id="new-thread">
                    {
                        this.state.newThreadActive ?
                            <div class="form-wrapper">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="above">
                                        <div className="wrapper-name">
                                            <label htmlFor="new-thread">Название</label>
                                            <input onChange={this.handleChange} placeholder="Название" type="text" name={this.state.threadName} id="new-thread" value={this.state.threadName} required />
                                        </div>

                                        <div className="wrapper-badge">
                                            <label htmlFor="badge-label">Каналы</label>
                                            <select name="badge-label" id="channels">
                                                <option value="common">Общий канал</option>
                                                <option value="saab">Канал отчуждения</option>
                                                <option value="mercedes">Канал по интересам</option>
                                                <option value="audi">ТВ3</option>
                                            </select>
                                        </div>
                                        <input type="submit" value="Создать"/>
                                        сам
                                        #Общий канал
                                    </div>
                                    
                                    <div className="under">
                                        <div className="wrapper-textarea">
                                            <textarea id="thread-text" name="" id="" rows="10" placeholder="Введите описание...">
                                            </textarea>
                                        </div>

                                    </div>

                                </form>
                            </div>
                            :
                            <div className="new-thread-placeholder">
                                <h3>Начать новый тред</h3>
                                <img src={newthread} alt="" />
                            </div>

                    }
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
                                <hr />
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
