import React, {Component} from "react";
import './ProfileWindow.scss'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "react-mdl";
// import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'
import ProfileReduxForm from "../ProfileReduxForm";

class ProfileWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
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
            <div>
                <Button colored onClick={this.handleOpenDialog} raised ripple>Profile</Button>
                <Dialog open={this.state.openDialog}>
                    <ProfileReduxForm onSubmit={onSubmitTask} handleCloseDialog={this.handleCloseDialog}/>
                </Dialog>
            </div>
        );
    }
}

export default ProfileWindow;
