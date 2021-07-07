import React from 'react';
import './Radio.css';

const Radio=() =>{
    return(
        <div className="Radio">
            <p className="question">What would you like to do?</p>
            <input className="radio" type="radio" value="Hire a caregiver" /> Hire a caregiver
            <input className="radiotxt radio" type="radio" value="Apply for a care jobs"/> Apply for a care jobs             
        </div>
    )
}

export default Radio