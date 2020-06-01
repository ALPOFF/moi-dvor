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
            msgData: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
        return (
            <div className="dialog-tab-wrapper">
                <header className="main">
                    <h4>tests</h4>
                    {/* {m.name} */}
                </header>
                <main className="dialog-container">

                    {this.state.chndlg.map(m =>
                        <div className="global-comment-wrapper">
                            <header className="username">
                                <h5>
                                    {m.user.first_name}
                                    {' ' + m.user.last_name}
                                </h5>
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

                <footer>
                    <form onSubmit={this.handleSubmit}>
                        <textarea placeholder="Введите сообщение" onChange={this.handleChange} value={this.state.msgData} cols="100" rows="5" />
                        <input type="submit" value="Send" />
                    </form>
                </footer>
                </main>

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
