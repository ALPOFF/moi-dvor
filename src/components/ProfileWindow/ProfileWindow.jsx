import React, {Component} from "react";
import './ProfileWindow.scss'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "react-mdl";
//import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'
import ProfileReduxForm from "../ProfileReduxForm";
import {connect} from "react-redux";
import appReducer from "../../state/app-reducer";
import axios from "axios";

class ProfileWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }

    componentDidMount() {
        console.log('TUT CODE', this.props.userProfileInt)
        console.log('HELLP')
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

    xxx() {
        alert(5)
    }


    render() {
        const onSubmitTask = (formData) => {
            console.log('INT', formData.val[0].value)
            //this.props.setTask(formData.taskName, formData.idWorker, formData.description, formData.deadline, formData.taskAddress)
            // axios.get(`http://185.12.95.84:4444/user`, {user_id: 3, firstname: formData.firstname, lastname: formData.lastname, patronymic: formData.patronymic, phone_number: formData.phone_number, address_id: "1", flat_number: "49", car_number: "625998", gender: 1, age: 44, marital_status: 1}).then(u => {
            //     console.log(u.data)
            // })
        };
        return (
            <div>
                <Button colored onClick={this.handleOpenDialog} raised ripple>Profile</Button>
                <Dialog open={this.state.openDialog}>
                    <ProfileReduxForm onSubmit={onSubmitTask} w={this.props.interests} handleCloseDialog={this.handleCloseDialog} />
                </Dialog>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        interests: state.appReducer.interests
    }
}

export default connect(mapStateToProps, {})(ProfileWindow);
