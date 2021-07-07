import React, { Component } from 'react';
import "./Input.css";

class Input extends Component {
    render(){
        return (
            <div>
                <form className="form" action="">
                    <input className="items" placeholder={this.props.insideText}/>
                </form>
            </div>
        )
    }
}


export default Input
