import React from 'react';
import "./SubHeading.css";

const SubHeading=(props) =>{
    return(
        <div className="SubHeading">
            <h3>{props.text}</h3>
        </div>
    )
}

export default SubHeading