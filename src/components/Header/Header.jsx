import React, {Component} from "react";
import './Header.scss'
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Profile from "../Neighbors/Profile/Profile";
import ProfileWindow from "../ProfileWindow/ProfileWindow";
import threads from '../../assets/images/header-images/threads.png';
import neighbors from '../../assets/images/header-images/neighbors.png';
import messages from '../../assets/images/header-images/messages.png';
import search from '../../assets/images/header-images/search.png';
import bell from '../../assets/images/header-images/bell.png';
import {Dialog} from "react-mdl";
import ProfileReduxForm from "../ProfileReduxForm";
import {connect} from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }

    componentDidMount() {

    }

    handleOpenDialog() {
        this.setState({
            openDialog: true
        });
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }
    render() {
        const onSubmitTask = (formData) => {
            console.log(11111)
            console.log(formData)
            //this.props.setTask(formData.taskName, formData.idWorker, formData.description, formData.deadline, formData.taskAddress)
        };
        return (
            <div className="header">
                <div className="tabs-wrapper">
                    <NavLink className="nav-item header-element" to="/channels">
                        <img className="inline-block" src={threads} width="30" alt=""/>
                        <div className="inline-block">Каналы</div>
                    </NavLink>
                    <NavLink className="nav-item header-element" to="/neighbors">
                        <img className="inline-block" src={neighbors} width="30" alt=""/>
                        <div className="inline-block">Соседи</div>
                    </NavLink>
                    <NavLink className="nav-item header-element" to="/messages">
                        <img className="inline-block" src={messages} width="30" alt=""/>
                        <div className="inline-block">Сообщения</div>
                    </NavLink>

                    <NavLink className="nav-item header-element" to="/search">
                        <img className="inline-block" src={search} width="30" alt=""/>
                        <div className="inline-block">Поиск</div>
                    </NavLink>
                </div>
                <div className="user-profile-wrapper">
                    <NavLink className="nav-item header-element profile-container" to="/bell">
                        <img className="inline-block ding-dong" src={bell} width="30" alt=""/>

                    </NavLink>

                    <div onClick={() => console.log('1111')} className="nav-item header-element profile-container">
                        <button onClick={this.handleOpenDialog}>Profile</button>
                        <Dialog open={this.state.openDialog}>
                            <ProfileReduxForm y={this.props.userProfile} w={this.props.userProfileInt} onSubmit={onSubmitTask} handleCloseDialog={this.handleCloseDialog}/>
                        </Dialog>
                    </div>

                    <div className="nav-item header-element profile-container" to="/profile">
                        <div className="inline-block">
                            <div className="circle">
                                <div className="circle-item">A</div>
                            </div>
                        </div>
                        <div className="inline-block">Профиль</div>
                    </div>

                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfileInt: state.appReducer.userProfileInt,
        userProfile: state.appReducer.userProfile
    }
}

export default connect(mapStateToProps, {})(Header);
