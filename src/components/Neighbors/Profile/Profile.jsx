import React, {Component, useEffect} from "react";
import {withRouter} from "react-router-dom";
import './Profile.scss'
import Interes from "../../common/Interes";
import axios from "axios";
import Select from "react-select";
import {connect} from "react-redux";
import {setUserProfileById} from "../../../state/app-reducer";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_info: {},
            userId: null
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let userId = this.props.match.params.userId;
        console.log(this.state.userId)
        console.log(userId)
        if (this.props.match.params.userId !== this.state.userId) {
            axios.get(`http://185.12.95.84:4444/user/${userId}`).then(u => {
                console.log(u.data);
                this.setState({user_info: u.data})
                this.setState({userId: this.props.match.params.userId})
            })
        }
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.setState({userId: userId})
        console.log(userId);
        axios.get(`http://185.12.95.84:4444/user/${userId}`).then(u => {
            console.log('uinfo', u.data);
            this.setState({user_info: u.data})
            let newInterestArr = []
            u.data.interests.forEach(i => newInterestArr.push({'label': i.name, value: 'i.id'}))
            //this.props.setUserProfileById(newInterestArr)
            console.log(this.state.user_info.interests.length)
        })
    }


    render() {
        return (
            <div className="profileWrapper">
                <div style={{paddingTop: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className="photo">
                        <img className="personPhoto" alt=""
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTnQ10XsARegWrtgIwH8LiUMMNeggR5CDtHdVDUPFZwdTA-En"/>
                    </div>
                    <h2 style={{paddingLeft: 30}}>{this.state.user_info.first_name}</h2>
                </div>
                <div className="info">
                    <h3 className="msg">Сообщение</h3>
                    {this.state.user_info.interests != undefined ? <div className="info_bio">
                        <h4>Телефон: {this.state.user_info.phone_number}</h4>
                        <h4>Авто: {this.state.user_info.car_number}</h4>
                        <h4>Пол: {this.state.user_info.gender === 0 ? <span>Ж</span> : <span>М</span>}</h4>
                        <h4>Семейное положение: {this.state.user_info.marital_status === 0 ? <span>Не в браке</span> :
                            <span>Состоит в браке</span>}</h4>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                         <span className="Interes">
                             <h4 style={{paddingRight: 10}}>Интересы: </h4>
                            {this.state.user_info.interests.length !== 0 ? this.state.user_info.interests.map(i =>
                                <Interes label={i.name}/>) : <h4> Отсутствуют</h4>}
                        </span>
                        </div>
                    </div> : <h1>Loading</h1>}
                </div>
            </div>
        )
    }
}

// const mapStateTOProps = (state) => ({
//
// })

export default connect(null, {})(withRouter(Profile));
