import React, {Component} from "react";
import './SelectedDialog.scss'
import axios from "axios";
import {withRouter} from "react-router-dom";

class SelectedDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chndlg: [],
            dialogId: null
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let dialogId = this.props.match.params.dialogId;
        console.log(this.state.dialogId)
        console.log(dialogId)
        if (this.props.match.params.dialogId !== this.state.dialogId) {
            axios.get(`http://185.12.95.84:4444/dialogs/${dialogId}`).then(u => {
                console.log('dialog here:', u.data);
                this.setState({chndlg: u.data})
                this.setState({dialogId: this.props.match.params.dialogId})
            })
        }
    }

    componentDidMount() {
        let dialogId = this.props.match.params.dialogId;
        this.setState({dialogId: dialogId})
        console.log(dialogId);
        axios.get(`http://185.12.95.84:4444/dialogs/${dialogId}`).then(u => {
            console.log('dialog here:', u.data);
            this.setState({chndlg: u.data})
            console.log(this.state.chndlg)
        })
    }

    render() {
        return (
            <div className="dialog-tab-wrapper">
                <header className="main">
                    <h4>Куплю гараж</h4>
                    <div className="sub-section">
                        <p className="members">4 участников</p>
                        <p className="thread"># 2.Интересы</p>
                    </div>
                </header>
                <main className="dialog-container">

                    {this.state.chndlg.map(m =>
                    <div className="global-comment-wrapper">
                        <div className="message-placeholder">
                            <img
                                src="https://www.coachcarson.com/wp-content/uploads/2018/09/Chad-Profile-pic-circle.png"
                                alt=""/>
                            <div className="msg-info">
                                <header className="username">
                                     <h5>
                                        {m.user.first_name}
                                        {' '+m.user.last_name}
                                    </h5>
                                    <p className="time">4ч.</p>
                                </header>
                                <section className="community">
                                    <p>Сообщество автолюбителей</p>
                                </section>
                            </div>


                        </div>
                        <div className="message-appendix">
                            <p>
                                  <div>
                                     {m.message}
                                     {m.datetime}
                                </div>
                            </p>
                        </div>
                    </div>
                    )}

                </main>
                <footer>
                    <form action="">
                        <textarea placeholder="Введите сообщение" name="" id="" cols="100" rows="6"></textarea>
                    </form>
                </footer>
                {/* <h4>Selected dialog Title</h4>
            <div>Selected dialog</div> */}
            </div>
        )
    }
}

export default withRouter(SelectedDialog);
