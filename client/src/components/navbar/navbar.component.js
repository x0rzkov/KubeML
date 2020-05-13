import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/3d.svg";

import "./navbar.styles.scss";

const Navbar = ({ currentUser }) => {
  const guestLinks = (
    <ul>
      <li>
        <Link to="/plans-and-pricing">PLANS/PRICING</Link>
      </li>
      <li>
        <Link to="/console">CONTACT</Link>
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
        <h3 className="logo-text">KubeML</h3>
      </div>
      <div>{guestLinks}</div>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Navbar);
