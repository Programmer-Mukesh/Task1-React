import React, { Component } from "react";
import "./Container.css";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Radio from "./Radio";
import Form from "./Form";
import Footer from "./Footer";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "Join free today.",
      text2: "Get Started! It only takes a few minutes.",
    };
  }

  render() {
    const { text1, text2 } = this.state;
    return (
      <div className="Container">
        <Heading text={text1} />
        <SubHeading text={text2} />
        <Radio />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default Container;
