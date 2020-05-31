import { Field, Form, reduxForm } from "redux-form";
import React from "react";
import { Button, DialogActions, DialogTitle } from "react-mdl";
import Interes from "./common/Interes";
import SelectInput from "./common/SelectInput";

const ProfileRedux = ({handleSubmit, handleCloseDialog, w, y}) => {
    const options =  [{label: "Футбол", value: "i.id"},
     {label: "Игры", value: "i.id"},
     {label: "Готовка", value: "i.id"}]

const ProfileRedux = ({ handleSubmit, handleCloseDialog }) => {
    return <Form onSubmit={handleSubmit}>
        <div className="photo-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Ваше фото</h2>
            <div className="user-image-container" style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="photo">
                    <img className="personPhoto" alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTnQ10XsARegWrtgIwH8LiUMMNeggR5CDtHdVDUPFZwdTA-En" />
                </div>
                {/* <button type='button'>Поменять фото</button> */}
            </div>
        </div>
        <div className="contact-info">
            <h2>Фамилия</h2>
            <div className="formItems">
                <Field placeholder={"Введите фамилию..."} name={"lastname"} component={"input"} />
            </div>
            <h2>Имя</h2>
            <div className="formItems">
                <Field placeholder={"Введите имя..."} name={"firstname"} component={"input"} />
            </div>
            <h2>Отчество</h2>
            <div className="formItems">
                <Field placeholder={"Введите отчество..."} name={"patronymic"} component={"input"} />
            </div>
            <div className="address">
                <div className="addressItem">
                    <h2>Дом</h2>
                    <div className="formItems">
                        <Field placeholder={"Номер дома/корпуса..."} name={"house-number"} component={"input"} />
                    </div>
                </div>
                <div>
                    <h2>Квартира</h2>
                    <div className="formItems">
                        <Field placeholder={"Номер квартиры..."} name={"flat-number"} component={"input"} />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="phoneAuto">
                    <h2>Телефон</h2>
                    <div className="formItems">
                        <Field placeholder={"Номер телефона..."} name={"phone-number"} component={"input"} />
                    </div>
                </div>
                <div className="phoneAuto">
                    <h2>Автомобиль</h2>
                    <div className="formItems">
                        <Field placeholder={"Номер авто..."} name={"car-number"} component={"input"} />
                    </div>
                </div>
            </div>
            <div className="intersts-card">
                <h2>Интересы</h2>
                <Interes />
            </div>
            <div className="formItems">
                <Field placeholder={"Выберите интересы..."} name={"interests"} component={"input"} />
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
        <div className="formItems">
            <Field name={"val"} options={w} component={SelectInput} multi/>
        </div>
        <h2>Пароль</h2>
        <Button type='button'>Изменить пароль</Button>
        <DialogActions>
            <Button  type='button' onClick={handleCloseDialog}>Отмена</Button>
            <button>Ок</button>
        </DialogActions>
    </Form>
};

const ProfileReduxForm = reduxForm({
    form: 'task',
    enableReinitialize: true,
})(ProfileRedux);

export default ProfileReduxForm;
