import React, { Component } from 'react'
import Input from './Input'
import "./Form.css"

class Form extends Component {
    render(){
        return (
            <div>
                <form className="form" action="">
                    <Input placeholder={"First Name*"}/>
                    <Input placeholder={"Last Name*"}/>
                    <Input placeholder={"City, State and ZIP*"}/>
                    <Input placeholder={"Email*"} type={"email"}/>
                    <Input placeholder={"Password*(at least 6 characters)"} type={"password"}/>
                    <select className="dropdown">
                        <option value="select">How Did You Hear About Us?</option>
                        <option value="select">Facebook</option>
                        <option value="select">Google</option>
                        <option value="select">Relatives</option>
                    </select>
                </form>
            </div>
        )
    }
}


export default Form