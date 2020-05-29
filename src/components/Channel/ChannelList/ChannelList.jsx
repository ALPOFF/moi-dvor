import React from "react";
import './ChannelList.scss'

const ChannelList = () => {
    return (
        <div>
            {/* channels list */}
            <section className="channels-list">
                <ol>
                    <li><a href="#">1. Общий</a></li>
                    <li><a href="#">2. Интересы</a></li>
                    <li><a href="#">3. Объявления</a></li>
                    <li><a href="#">4. Инициативы</a></li>
                    <li><a href="#">5. Сбор средств</a></li>
                </ol>
            </section>
        </div>
    )
};

export default  ChannelList;
