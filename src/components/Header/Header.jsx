import React, {Component} from "react";
import './Header.scss'
import {NavLink, Redirect} from "react-router-dom";
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
import axios from "axios";
import {setUserProfileInt} from "../../state/app-reducer";

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
            console.log(formData)
            let newInterestArr = []
            this.props.userProfileInt.forEach(o => newInterestArr.push(o.value))
            console.log('from selector', formData.val)
            formData.val.forEach(t => newInterestArr.push(t.value))
            axios.post(`http://185.12.95.84:4444/user/interests`, {
                interests: newInterestArr,
                user_id: this.props.userId
            }).then(u => {
                console.log('otvetNaInter', u.data);
            });
            this.props.setUserProfileInt(this.props.userProfileInt.concat(formData.val))
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
                        <div className="inline-block">
                            <div className="circle">
                                <div className="circle-item">A</div>
                            </div>
                        </div>
                        <button className="inline-block" onClick={this.handleOpenDialog}>Профиль</button>
                        <Dialog open={this.state.openDialog}>
                            <ProfileReduxForm userProfile={this.props.userProfile} w={this.props.interestsOut} upi={this.props.userProfileInt}
                                              onSubmit={onSubmitTask} handleCloseDialog={this.handleCloseDialog}/>
                        </Dialog>
                    </div>

                    {/*<div className="nav-item header-element profile-container" to="/profile">*/}
                    {/*    <div className="inline-block">*/}
                    {/*        <div className="circle">*/}
                    {/*            <div className="circle-item">A</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="inline-block">Профиль</div>*/}
                    {/*</div>*/}

                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfileInt: state.appReducer.userProfileInt,
        userProfile: state.appReducer.userProfile,
        interests: state.appReducer.interests,
        interestsOut: state.appReducer.interestsOut,
        userId: state.appReducer.userId
    }
}

export default connect(mapStateToProps, {setUserProfileInt})(Header);
