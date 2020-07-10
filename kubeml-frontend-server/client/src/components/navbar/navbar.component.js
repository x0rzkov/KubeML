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
      bg="dark"
      variant="dark"
      style={{ paddingTop: 10, paddingBottom: 10 }}
    >
      <Link to="/" className="mx-1">
        <Logo style={styles.logo} />
        <Navbar.Brand>KubeML</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto m-right-3" style={{ alignItems: "center" }}>
          <Link to="/plans-and-pricing" className="p-2">
            PLANS/PRICING
          </Link>
          <Link to="/console" className="p-2">
            CONSOLE
          </Link>
          {currentUser ? (
            <div onClick={() => handleSignOut()} className="p-2">
              SIGN OUT
            </div>
          ) : (
            <Link to="/signin" className="p-2">
              SIGN IN
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
  logo: {
    height: 30,
    width: 30,
    marginBottom: 5,
    marginRight: 5,
  },
};
