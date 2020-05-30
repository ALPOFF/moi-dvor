import React, {Component, useEffect} from "react";
import {withRouter} from "react-router-dom";
import './Profile/Profile.scss'

class Profile extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        console.log(userId)
        //запрос для профиля по айди из истории
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex'}}>
                        <div className="photo">
                            <img className="personPhoto" alt=""
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTnQ10XsARegWrtgIwH8LiUMMNeggR5CDtHdVDUPFZwdTA-En"/>
                        </div>
                    <h2>Username</h2>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span>Сообщение</span>
                    <span>Телефон:</span>
                    <span>Авто</span>
                    <span>Интересы</span>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile);
