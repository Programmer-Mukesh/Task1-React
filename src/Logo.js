import React from "react";
import logo from "./logo.png";

const style = {
  marginLeft: "10rem",
  padding: "1rem",
};

const Logo = () => {
  return (
    <div className="logo">
      <img style={style} src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
