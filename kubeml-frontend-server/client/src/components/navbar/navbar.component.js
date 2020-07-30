import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { clearPlanDetails } from "../../redux/plans-and-pricing/plans-and-pricing.actions";
import { ReactComponent as Logo } from "../../assets/3d.svg";

const NavBar = ({ currentUser, clearPlanDetails }) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      clearPlanDetails();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={styles.nav}
      className="navbar-main"
    >
      <Link to="/">
        <Logo style={styles.logo} />
        <Navbar.Brand style={styles.brand}>KubeML</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto m-right-3" style={{ alignItems: "center" }}>
          <Link to="/plans-and-pricing" className="p-2 nav-links">
            Plans/Pricing
          </Link>
          <Link to="/console" className="p-2 nav-links">
            Console
          </Link>
          {currentUser ? (
            <div onClick={() => handleSignOut()} className="p-2 nav-links">
              Sign Out
            </div>
          ) : (
            <Link to="/signin" className="p-2 nav-links">
              Sign In
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { clearPlanDetails })(NavBar);

const styles = {
  nav: {
    paddingTop: 15,
    paddingBottom: 0,
    backgroundColor: "#20232a",
    paddingLeft: 36,
  },
  logo: {
    height: 36,
    width: 36,
    marginBottom: 10,
    marginRight: 5,
  },
  brand: {
    fontSize: 28,
    fontWeight: 700,
    fontFamily: "Raleway",
    paddingTop: 0,
    paddingBottom: 0,
  },
};
