import React from "react";
import {NavLink} from "react-router-dom";
import './ChannelDialogs.scss';
import newthread from '../../../assets/images/threads-tab/newthread.png';

let chndlg = [
    {chndlg_title: 'Куплю гараж', chndlg_id: 0},
    {chndlg_title: 'Продам гараж', chndlg_id: 1},
    {chndlg_title: 'Обменяю гараж', chndlg_id: 2},
    {chndlg_title: 'Выпью в гараже', chndlg_id: 3},
    {chndlg_title: 'На шашлыки в гараж?', chndlg_id: 4},
    {chndlg_title: 'Сдам гараж', chndlg_id: 5},
    {chndlg_title: 'Отдам гараж', chndlg_id: 6},
    {chndlg_title: 'Куплю вишнёвый гараж, дорого', chndlg_id: 7},
]

const ChannelDialogs = () => {
    return (
        <div className="threads-tab-container">
            <div className="add-new-thread-wrapper">
                <h3>Начать новый тред</h3>
                <img src={newthread} alt=""/>
            </div>
            <div className="threads-list-wrapper">
                    <header>
                    </header>
                    
                    <main className="threads-list">
                        <div className="thread-list-item">
                            {chndlg.map(c => <NavLink to={"/messages/dialogs/channelId/" + c.chndlg_id}>
                                <div className="thread-item-title" style={{margin: '20px'}}><h4>{c.chndlg_title}</h4></div>
                                <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, atque magni quos deleniti quae dolor et aliquam. Sequi ipsam soluta explicabo quas, adipisci quasi magni exercitationem illum inventore cupiditate nostrum mollitia corporis ab maxime nulla tempora cumque placeat veniam distinctio asperiores perferendis.</div>
                                <div className="badge">#3 Объявления</div>
                                <hr/>
                                </NavLink>)
                            }
                        </div>
                    </main>

            </div>
        </div>
    )
};

export default ChannelDialogs;
