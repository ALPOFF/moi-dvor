import {Field, Form, reduxForm} from "redux-form";
import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "react-mdl";

const ProfileRedux = ({handleSubmit, handleCloseDialog}) => {
    return <Form onSubmit={handleSubmit}>
        <div style={{display: 'flex'}}>
            <DialogTitle>Фото</DialogTitle>
            <div className="photo">
                <img className="personPhoto" alt=""
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTnQ10XsARegWrtgIwH8LiUMMNeggR5CDtHdVDUPFZwdTA-En"/>
            </div>
            <Button type='button'>Поменять фото</Button>
        </div>
        <DialogTitle>Фамилия</DialogTitle>
        <div className="formItems">
            <Field placeholder={"Введите фамилию..."} name={"description"} component={"textarea"}/>
        </div>
        <DialogTitle>Имя</DialogTitle>
        <div className="formItems">
            <Field placeholder={"Введите имя..."} name={"description"} component={"textarea"}/>
        </div>
        <DialogTitle>Отчество</DialogTitle>
        <div className="formItems">
            <Field placeholder={"Введите отчество..."} name={"description"} component={"textarea"}/>
        </div>
        <div style={{display: 'flex'}}>
            <DialogTitle>Дом</DialogTitle>
            <div className="formItems">
                <Field placeholder={"Номер дома/корпуса..."} name={"description"} component={"textarea"}/>
            </div>
            <DialogTitle>Квартира</DialogTitle>
            <div className="formItems">
                <Field placeholder={"Номер квартиры..."} name={"description"} component={"textarea"}/>
            </div>
        </div>
        <div style={{display: 'flex'}}>
            <DialogTitle>Телефон</DialogTitle>
            <div className="formItems">
                <Field placeholder={"Номер телефона..."} name={"description"} component={"textarea"}/>
            </div>
            <DialogTitle>Авто</DialogTitle>
            <div className="formItems">
                <Field placeholder={"Номер авто..."} name={"description"} component={"textarea"}/>
            </div>
        </div>
        <DialogTitle>Интересы</DialogTitle>
        <div className="formItems">
            <Field placeholder={"Выберите интересы..."} name={"description"} component={"textarea"}/>
        </div>
        <Button type='button'>Изменить интересы</Button>
        <DialogTitle>Пароль</DialogTitle>
        <Button type='button'>Изменить пароль</Button>
        <DialogActions>
            <Button type='button' onClick={handleCloseDialog}>Отмена</Button>
            <button>Ок</button>
        </DialogActions>
    </Form>
};

const ProfileReduxForm = reduxForm({
    form: 'task',
    enableReinitialize: true,
})(ProfileRedux);

export default ProfileReduxForm;
