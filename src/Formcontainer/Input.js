import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    const { insideText } = this.props;
    return (
      <div>
        <form className="form" action="">
          <input className="items" placeholder={insideText} />
        </form>
      </div>
    );
  }
}

export default Input;
