import React from 'react';
import './Heading.css';

const Heading=(props) =>{
    return(
        <div className="Heading">
            <h2>{props.text}</h2>
        </div>
    )
}

export default Heading