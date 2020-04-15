import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/3d.svg";

const Navbar = ({ currentUser }) => {
  const guestLinks = (
    <ul>
      <li>
        <Link to="/">PLANS/PRICING</Link>
      </li>
      <li>
        <Link to="/">CONTACT</Link>
      </li>
      <li>
        {currentUser ? (
          <div onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <text className="logo-text">KubeML</text>
      </div>
      <Fragment>{guestLinks}</Fragment>
    </nav>
  );
};

export default Navbar;
