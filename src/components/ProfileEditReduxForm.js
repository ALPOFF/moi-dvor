import {Field, Form, reduxForm} from "redux-form";
import React from "react";
import {Button, DialogActions, DialogTitle} from "react-mdl";
import Interes from "./common/Interes";

const ProfileEditRedux = ({handleSubmit, handleCloseDialog}) => {


    return <Form onSubmit={handleSubmit}>
        <div style={{display: 'flex', flexDirection: 'column'}}>

            <h2>Фото</h2>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="photo">
                    <img className="personPhoto" alt=""
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTnQ10XsARegWrtgIwH8LiUMMNeggR5CDtHdVDUPFZwdTA-En"/>
                </div>
                <button type='button'>Поменять фото</button>
            </div>
        </div>
        <h2>Фамилия</h2>
        <div className="formItems">
            <Field placeholder={"Введите фамилию..."} name={"description"} component={"input"}/>
        </div>
        <h2>Имя</h2>
        <div className="formItems">
            <Field placeholder={"Введите имя..."} name={"description"} component={"input"}/>
        </div>
        <h2>Отчество</h2>
        <div className="formItems">
            <Field placeholder={"Введите отчество..."} name={"description"} component={"input"}/>
        </div>
        <div className="address">
            <div className="addressItem">
                <h2>Дом</h2>
                <div className="formItems">
                    <Field placeholder={"Номер дома/корпуса..."} name={"description"} component={"input"}/>
                </div>
            </div>
            <div>
                <h2>Квартира</h2>
                <div className="formItems">
                    <Field placeholder={"Номер квартиры..."} name={"description"} component={"input"}/>
                </div>
            </div>
        </div>
        <div style={{display: 'flex'}}>
            <div className="phoneAuto">
                <h2>Телефон</h2>
                <div className="formItems">
                    <Field placeholder={"Номер телефона..."} name={"description"} component={"input"}/>
                </div>
            </div>
            <div className="phoneAuto">
                <h2>Авто</h2>
                <div className="formItems">
                    <Field placeholder={"Номер авто..."} name={"description"} component={"input"}/>
                </div>
            </div>
        </div>
        <div>
            <h2>Интересы</h2>
            <Interes />
        </div>
        <div className="formItems">
            <Field placeholder={"Выберите интересы..."} name={"description"} component={"input"}/>
        </div>
        <Button type='button'>Изменить интересы</Button>
        <h2>Пароль</h2>
        <Button type='button'>Изменить пароль</Button>
        <DialogActions>
            <Button type='button' onClick={handleCloseDialog}>Отмена</Button>
            <button>Ок</button>
        </DialogActions>
    </Form>
};

const ProfileEditReduxForm = reduxForm({
    form: 'edit',
    enableReinitialize: true,
})(ProfileEditRedux);

export default ProfileEditReduxForm;
