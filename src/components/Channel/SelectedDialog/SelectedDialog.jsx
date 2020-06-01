import React, { Component } from "react";
import './SelectedDialog.scss'
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUserId } from "../../../state/app-reducer";

class SelectedDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chndlg: [],
            dialogId: null,
            msgData: '',
            votes_yes: [],
            votes_no: [],
            channel_id: 0,
            vote: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChangeVotes = this.handleChangeVotes.bind(this);
        this.handleSubmitVotes = this.handleSubmitVotes.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let dialogId = this.props.match.params.dialogId;
        console.log(this.state.dialogId)
        console.log(dialogId)
        if (this.props.match.params.dialogId !== this.state.dialogId) {
            axios.get(`http://185.12.95.84:4444/dialogs/${dialogId}`).then(u => {
                console.log('dialog here:', u.data);
                this.setState({ chndlg: u.data })
                this.setState({ dialogId: this.props.match.params.dialogId })
            })
        }
    }

    componentDidMount() {
        //let dialogId = this.props.match.params.dialogId;
        this.setState({ dialogId: this.props.match.params.dialogId })
        console.log(this.props.match.params.dialogId);
        axios.get(`http://185.12.95.84:4444/dialogs/${this.props.match.params.dialogId}`).then(u => {
            console.log('dialog here:', u.data);
            this.setState({ chndlg: u.data })
            console.log(this.state.chndlg)
        })
        axios.get(`http://185.12.95.84:4444/dialogs/vote/${this.props.match.params.dialogId}`).then(u => {
            console.log('dialog here:', u.data);
            this.setState({ votes_yes: u.data.user_ids_yes })
            this.setState({ votes_no: u.data.user_ids_no })
            this.setState({ channel_id: u.data.channel_id })
            console.log(this.state.votes_no, this.state.channel_id)
        })
    }

    handleSubmit(event) {

        axios.post(`http://185.12.95.84:4444/message`, { user_id: this.props.userId, dialog_id: this.state.dialogId, message: this.state.msgData }).then(u => {
            console.log('otvet:', u.data)
        })
        event.preventDefault();
    }

    handleChange(event) {
        console.log('txt', this.props.userId)
        console.log('dialog_id', this.state.dialogId)
        console.log('msg', this.state.msgData)
        this.setState({ msgData: event.target.value })
    }


    handleSubmitVotes(event) {
        console.log("current vote: " + this.state.vote);

        axios.post(`http://185.12.95.84:4444/vote/user`, {
            user_id: this.props.userId,
            dialog_id: this.state.dialogId,
            vote: this.state.vote
        }
        ).then(u => {
            console.log('otvet:', u.data)
        })
        event.preventDefault();
    }

    handleChangeVotes(event) {
        console.log('on vote change: ', event.target.id)
        this.setState({ vote: event.target.id })
    }


    render() {
        return (
            <div className="dialog-tab-wrapper">
                <header className="main">
                    <h4>tests</h4>
                    {/* {m.name} */}
                    {this.state.channel_id == 3 && <section>
                        <div className="votes">

                            <form className="vote-form" onSubmit={this.handleSubmitVotes} action=""
                            >

                                <div className="">
                                    <p>votes_yes: {this.state.votes_yes}</p>
                                    <input onChange={this.handleChangeVotes} id="1" type="radio" name="vote" value="Plus" checked />
                                </div>
                                <div className="">
                                <p>votes_no: {this.state.votes_no}</p>
                                <input onChange={this.handleChangeVotes} id="0" type="radio" name="vote" value="Minus" />
                                </div>


                                <input type="submit" value="проголосовать" />

                            </form>
                        </div>
                    </section>
                    }
                </header>
                <main className="dialog-container">

                    {this.state.chndlg.map(m =>
                        <div className="global-comment-wrapper">

                            <header className="username">
                                <h5>
                                    {m.user.first_name}
                                    {' ' + m.user.last_name}
                                </h5>
                                {this.prop}
                                <p className="time">4ч.</p>

                            </header>
                            <div className="message-placeholder">
                                <img
                                    src="https://www.coachcarson.com/wp-content/uploads/2018/09/Chad-Profile-pic-circle.png"
                                    alt="" />
                                <div className="msg-info">

                                    <section className="community">
                                        <p>Сообщество автолюбителей</p>
                                    </section>
                                </div>
                            </div>
                            <div className="message-appendix">
                                <p>
                                    <div>
                                        {m.message}
                                    </div>
                                    <span style={{ fontSize: 12 }}>{m.datetime}</span>
                                </p>
                            </div>
                        </div>
                    )}


                </main>
                <footer>
                    <form onSubmit={this.handleSubmit}>
                        <textarea placeholder="Введите сообщение" onChange={this.handleChange} value={this.state.msgData} cols="100" rows="5" />
                        <input className="dialog-button" type="submit" value="Send" />
                    </form>
                </footer>

                {/* <h4>Selected dialog Title</h4>
            <div>Selected dialog</div> */}
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    userId: state.appReducer.userId
});

export default connect(mapStateToProps, {})(withRouter(SelectedDialog));
