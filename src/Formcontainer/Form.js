import React, { Component } from "react";
import Input from "./Input";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content1: "First Name*",
      content2: "Last Name*",
      content3: "City, State and ZIP*",
      content4: "Email*",
      content5: "Password*(at least 6 characters)",
      options: [
        "How Did You Hear About Us?",
        "Facebook",
        "Google",
        "Relatives",
      ],
    };
  }

  render() {
    const { 
      content1,
      content2,
      content3, 
      content4, 
      content5, 
      options, 
      } = this.state;

    return (
      <div>
        <form className="form" action="">
          <Input insideText={content1} />
          <Input insideText={content2} />
          <Input insideText={content3} />
          <Input insideText={content4} type="email" />
          <Input insideText={content5} type="password" />
          <select className="dropdown">
            {options.map((x, index) => (
              <option value="select" key={index}>
                {x}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
