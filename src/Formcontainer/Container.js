import React, { Component } from 'react'
import "./Container.css"
import Heading from './Heading'
import SubHeading from './SubHeading';
import Radio from './Radio';
import Form from './Form';
import Footer from './Footer';

class Container extends Component{
    constructor(props){
        super(props)
        this.state={
            text1: "Join free today.",
            text2: "Get Started! It only takes a few minutes."
        }
    }

    render(){
        return(
            <div className="Container">
                <Heading text={this.state.text1}/>
                <SubHeading text={this.state.text2}/>
                <Radio/>
                <Form/>
                <Footer/>
            </div>
        )
    }
}

export default Container;
