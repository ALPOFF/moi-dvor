import React from "react";
import './Interes.scss'

const Interes = (props) => {
    return (
        <div style={{marginBottom: '5px'}} className="InteresCont">
            <h5>{props.name}</h5>
        </div>
    )
};

export default Interes;
