import React, {useEffect} from "react";
import './Interes.scss'
import closeBtn from './../../assets/images/close.png'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {setUserProfileInt} from "../../state/app-reducer";

const Interes = (props) => {

    useEffect(() => {
 console.log('props', props)
    }, []);

    let deleteInterest = (event) => {
        console.log('IDшник', event.target.id)
        let newArrInt = props.userProfileInt.filter(g => g.value != event.target.id)
        console.log('newArrInt', newArrInt)
        console.log(props.userId)
        props.setUserProfileInt(newArrInt)
        axios.post(`http://185.12.95.84:4444/user/interests`, {interests: newArrInt.map(t => t.value), user_id: props.userId}).then(u => {
            console.log(u.data)
        })
    }
    return (
        <h5 className="InteresCont">{props.int_info.label || props.int_info.name} <img style={{paddingLeft: 10}} id={props.int_info.value || props.int_info.id} onClick={deleteInterest} src={closeBtn} alt="closeBtn" height={15}/></h5>
    )
};

let mapStateToProps = (state) => ({
    userProfileInt: state.appReducer.userProfileInt,
    userId: state.appReducer.userId
})

export default connect(mapStateToProps, {setUserProfileInt})(withRouter(Interes));
