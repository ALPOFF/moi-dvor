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
            newThreadActive: false
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let channelId = this.props.match.params.channelId;
        console.log(this.state.channelId)
        console.log(channelId)
        if (this.props.match.params.channelId !== this.state.channelId) {
            axios.get(`http://185.12.95.84:4444/channels/${channelId}/dialogs`).then(u => {
                console.log(u.data);
                this.setState({ chndlg: u.data })
                this.setState({ channelId: this.props.match.params.channelId })
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
        })
    }

    generateNewThread() {
        console.log("new-thread");

        this.setState({ newThreadActive: true });
        let threadContainer = document.getElementById("new-thread");
        // threadContainer.innerHTML

    }

    render() {
        return (
            <div className="threads-tab-container">
                <div onClick={this.generateNewThread} className="add-new-thread-wrapper" id="new-thread">
                    {
                        this.state.newThreadActive ?
                            <div class="form-wrapper">
                                <form action="">
                                    <div className="above">
                                        <div className="wrapper-name">
                                            <label htmlFor="new-thread">Название</label>
                                            <input type="text" name="new-thread" id="new-thread" required />
                                        </div>

                                        <div className="wrapper-badge">
                                            <label htmlFor="badge-label">Категория</label>
                                            <select name="badge-label" id="cars">
                                                <option value="volvo">Категория 1</option>
                                                <option value="saab">Категория 2</option>
                                                <option value="mercedes">Категория 3</option>
                                                <option value="audi">Категория 4</option>
                                            </select>
                                        </div>
                                        <button type="submit">Создать</button>

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
                                <div className="thread-item-title" style={{ margin: '20px' }}><h4>{c.name}</h4></div>
                                <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                                atque magni quos deleniti quae dolor et aliquam. Sequi ipsam soluta explicabo quas,
                                adipisci quasi magni exercitationem illum inventore cupiditate nostrum mollitia
                                corporis ab maxime nulla tempora cumque placeat veniam distinctio asperiores
                                perferendis.
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
