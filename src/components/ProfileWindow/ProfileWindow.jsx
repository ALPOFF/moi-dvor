import React, {Component} from "react";
import './ProfileWindow.scss'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "react-mdl";
//import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'
import ProfileReduxForm from "../ProfileReduxForm";
import {connect} from "react-redux";
import appReducer from "../../state/app-reducer";

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
            console.log(formData)
            //this.props.setTask(formData.taskName, formData.idWorker, formData.description, formData.deadline, formData.taskAddress)
        };
        let work = [{a: 1, b: 2}]
        return (
            <div>
                <Button colored onClick={this.handleOpenDialog} raised ripple>Profile</Button>
                <Dialog open={this.state.openDialog}>
                    <ProfileReduxForm onSubmit={onSubmitTask} w={this.props.userProfileInt} handleCloseDialog={this.handleCloseDialog} />
                </Dialog>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        userProfileInt: state.appReducer.userProfileInt
    }
}

export default connect(mapStateToProps, {})(ProfileWindow);
