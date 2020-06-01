import React, {Component, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import './ChannelDialogs.scss';
import newthread from '../../../assets/images/threads-tab/newthread.png';
import axios from "axios";
import {withRouter} from "react-router-dom";
import Select from 'react-select'
import {connect} from "react-redux";

const options = [
    {id: 1, value: 'Music', label: 'Музыка'},
    {id: 2, value: 'Sport', label: 'Спорт'},
    {id: 3, value: 'Food', label: 'Еда'}
]

class ChannelDialogs extends Component {
    constructor(props) {
        super(props);
        this.generateNewThread = this.generateNewThread.bind(this);
        this.state = {
            chndlg: [],
            channelId: null,
            newThreadActive: false,
            threadName: '',
            interests: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.channelId !== this.state.channelId) {
            axios.get(`http://185.12.95.84:4444/channels/${this.props.match.params.channelId}/dialogs/${this.props.userId}`).then(u => {
                this.setState({chndlg: u.data})
                this.setState({channelId: this.props.match.params.channelId})
                console.log('DIDUP', this.state.chndlg)
            })
        }
    }

    componentDidMount() {

        console.log('LLLLL', this.props)
        this.setState({channelId: this.props.match.params.channelId})
        console.log('CH_ID:', this.state.channelId)
        console.log(this.props.match.params.channelId);
        axios.get(`http://185.12.95.84:4444/channels/${this.props.match.params.channelId}/dialogs/${this.props.userId}`).then(u => {
            this.setState({chndlg: u.data})
            console.log(this.state.chndlg)
        });

    }

    generateNewThread() {
        console.log("new-thread");

        this.setState({newThreadActive: true});
        let threadContainer = document.getElementById("new-thread");
        // threadContainer.innerHTML

    }

    handleChange(event) {
        this.setState({threadName: event.target.value});
        console.log(event.target.value);
    }

    handleSubmit(event) {

        axios.post(`http://185.12.95.84:4444/dialogs`, {
            name: this.state.threadName,
            channel_id: this.state.channelId,
            interests: this.state.interests
        }).then(u => {
            console.log('otvetM', u.data);
        })
        alert('Отправленное имя: ' + this.state.threadName);
        event.preventDefault();
    }

    handleSelectChange(event) {
        console.log('CHOOSEN INT', event);
        let interestsId = [];
        event.forEach(t => interestsId.push(t.value))
        console.log('newIdArr:', interestsId)
        this.setState({interests: interestsId});
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
                                            {this.state.interests.map(i => <span>{i.label}</span>)}
                                            <input onChange={this.handleChange} placeholder="Название" type="text"
                                                   name={this.state.threadName} id="new-thread"
                                                   value={this.state.threadName} required/>
                                        </div>
                                        <input type="submit" value="Создать"/>

                                    </div>
                                    {(this.props.match.params.channelId == 1) && <section className="interests">
                                        <Select onChange={this.handleSelectChange}
                                                isMulti
                                                name="colors"
                                                options={this.props.userProfileInt}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                        />
                                    </section>}

                                </form>
                            </div>
                            :
                            <div className="new-thread-placeholder">
                                <h3>Начать новый тред</h3>
                                <img src={newthread} alt=""/>
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
                                <div style={{display: 'flex'}}>
                                    {c.interests.map(i => <span className="badge">{i.name}</span>)}
                                </div>
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

let mapStateToProps = (state) => ({
    userProfileInt: state.appReducer.userProfileInt,
    userId: state.appReducer.userId
})


export default connect(mapStateToProps, {})(withRouter(ChannelDialogs))
