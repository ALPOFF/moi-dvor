import { Field, Form, reduxForm } from "redux-form";
import React from "react";
import { Button, DialogActions, DialogTitle } from "react-mdl";
import Interes from "./common/Interes";
import SelectInput from "./common/SelectInput";

const ProfileRedux = ({handleSubmit, handleCloseDialog, w, upi, userProfile}) => {
     return <Form onSubmit={handleSubmit}>
        <div className="photo-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Ваше фото</h2>
            <div className="user-image-container" style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="photo">
                    {/*<img className="personPhoto" alt=""*/}
                    {/*    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTnQ10XsARegWrtgIwH8LiUMMNeggR5CDtHdVDUPFZwdTA-En" />*/}
                        <img className="personPhoto" alt=""
                        src="https://www.coachcarson.com/wp-content/uploads/2018/09/Chad-Profile-pic-circle.png" />
                </div>
                {/* <button type='button'>Поменять фото</button> */}
            </div>
        </div>
        <div className="contact-info">

            <h2>Фамилия</h2>
            <div className="formItems">
                <Field placeholder={userProfile.last_name} value={userProfile.first_name} name={"lastname"} component={"input"} />
            </div>
            <h2>Имя</h2>
            <div className="formItems">
                <Field placeholder={userProfile.first_name} name={"firstname"} component={"input"} />
            </div>
            <h2>Отчество</h2>
            <div className="formItems">
                <Field placeholder={userProfile.patronymic} name={"patronymic"} component={"input"} />
            </div>
            <div className="address">
                <div className="addressItem">
                    <h2>Дом</h2>
                    <div className="formItems">
                        <Field placeholder={userProfile.address_id.house_number} name={"house-number"} component={"input"} />
                    </div>
                </div>
                <div>
                    <h2>Квартира</h2>
                    <div className="formItems">
                        <Field placeholder={userProfile.flat_number} name={"flat-number"} component={"input"} />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="phoneAuto">
                    <h2>Телефон</h2>
                    <div className="formItems">
                        <Field placeholder={userProfile.phone_number} name={"phone-number"} component={"input"} />
                    </div>
                </div>
                <div className="phoneAuto">
                    <h2>Автомобиль</h2>
                    <div className="formItems">
                        <Field placeholder={userProfile.car_number} name={"car-number"} component={"input"} />
                    </div>
                </div>
            </div>
            <div className="intersts-card">
                <h2>Интересы</h2>
            </div>
            <div className="formItems">
                <div style={{marginTop: '5px', display: 'flex'}}>
                {upi.map(m => <Interes int_info={m} />)}
                </div>
            </div>
        </div>
        <Button type='button'><h2>Изменить интересы</h2></Button>
        <div className="formItemsInterest">
            <Field name={"val"} options={w} component={SelectInput} multi/>
        </div>

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
