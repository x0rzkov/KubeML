import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/3d.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <text className="logo-text">KubeML</text>
    </div>
    <div className="options">
      <Link className="option" to="/">
        PLANS/PRICING
      </Link>
      <Link className="option" to="/">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
