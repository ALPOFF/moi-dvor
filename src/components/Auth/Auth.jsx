import React, {useEffect, useState} from "react";
import {Button, FormGroup, FormControl} from "react-bootstrap";
import "./Auth.scss";
import axios from "axios";
import {connect} from "react-redux";
import {setUserId} from "../../state/app-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const [telephone, setTel] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return telephone.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        console.log(telephone)
        console.log(password)
        event.preventDefault();
        axios.post(`http://185.12.95.84:4444/auth`, {phone_number: telephone, password: password}).then(u => {
            console.log('LOGIN?:', u.data)
            props.setUserId(u.data)
        })
    }

    if (props.userId !== null) return <Redirect to={"/channels"}/>
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <h3>Логин</h3>
                    <FormControl
                        autoFocus
                        type='tel'
                        value={telephone}
                        placeholder="Введите ваш телефон"
                        onChange={e =>
                            setTel(e.target.value)
                        }
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <h3>Пароль</h3>
                    <FormControl
                        value={password}
                        placeholder="Введите ваш пароль"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Войти
                </Button>
            </form>
        </div>
    );
};

let mapStateToProps = (state) => ({
    userId: state.appReducer.userId
})

export default connect(mapStateToProps, {setUserId})(Login);
