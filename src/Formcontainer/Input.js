import React, { Component } from 'react';
import "./Input.css";

class Input extends Component {
    render(){
        return (
            <div>
                <form className="form" action="">
                    <input className="items" type={this.props.type} placeholder={this.props.placeholder}/>
                </form>
            </div>
        )
    }
}


export default Input