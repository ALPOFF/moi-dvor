import React from "react";
import './CustomComp.scss'

const CustomComp = () => {
    return (
        <div className="divStyle">
            <h1 style={{color: "white"}}>hi from custom</h1>
            <section className="interests">
                <p>Интересы</p>
            </section>
        </div>
    )
};

// const CustomComp = () => (
//         <div className="divStyle"><h1 style={{color: "white"}}>hi from custom</h1></div>
// );

export default CustomComp;
