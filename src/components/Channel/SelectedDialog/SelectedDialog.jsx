import React from "react";
import './SelectedDialog.scss'

const SelectedDialog = () => {
    return (
        <div className="dialog-tab-wrapper">
            <header className="main">
                <h4>Куплю гараж</h4>
                <div className="sub-section">
                    <p className="members">4 участников</p>
                    <p className="thread"># 2.Интересы</p>
                </div>
            </header>
            <main className="dialog-container">
                
                <div className="global-comment-wrapper">
                    <div className="message-placeholder">
                        <img src="https://www.coachcarson.com/wp-content/uploads/2018/09/Chad-Profile-pic-circle.png" alt=""/>
                        <div className="msg-info">
                            <header className="username">
                                <h5>Иван Иванов</h5>
                                <p className="time">4ч.</p>
                            </header>
                            <section className="community">
                                <p>Сообщество автолюбителей</p>   
                            </section>
                        </div>
                        
                    </div>
                    <div className="message-appendix">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, tempora accusamus, ipsa earum soluta atque suscipit fugit quas culpa dolorum mollitia dolore quidem praesentium neque veritatis dicta expedita officia laudantium.
                        </p>
                    </div>
                </div>



            </main>
            <footer>
                <form action="">
                    <textarea placeholder="Введите сообщение" name="" id="" cols="30" rows="10"></textarea>
                </form>
            </footer>
            {/* <h4>Selected dialog Title</h4>
            <div>Selected dialog</div> */}
        </div>
    )
};

export default SelectedDialog;
