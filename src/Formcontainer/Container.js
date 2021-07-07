import React, { Component } from 'react'
import "./Container.css"
import Heading from './Heading'
import SubHeading from './SubHeading';
import Radio from './Radio';
import Form from './Form';
import Footer from './Footer';


class Container extends Component{
    render(){
        return(
            <div className="Container">
                <Heading text={"Join free today."}/>
                <SubHeading text={"Get Started! It only takes a few minutes."}/>
                <Radio/>
                <Form/>
                <Footer/>
            </div>
        )
    }
}

export default Container;