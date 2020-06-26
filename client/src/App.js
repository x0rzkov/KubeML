import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import AlertPopUp from "./components/bootstrap-ui/alert/alert.component";
import HomePage from "./pages/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up.component";
import PlansAndPricingPage from "./pages/plans-and-pricing.component";
import ConsolePage from "./pages/console.component";
import CheckoutPage from "./pages/checkout.component";
import {
  setClientMonthlyTotal,
  setClusterURL,
} from "./redux/plans-and-pricing/plans-and-pricing.actions";

import {
  auth,
  createUserProfileDocument,
  getUserPlanDetails,
} from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, setClusterURL, setClientMonthlyTotal } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          console.log("yo ", snapShot.id);
          setCurrentUser({
            id: snapShot.id,
            displayName: snapShot.data().displayName,
            email: snapShot.data().email,
          });
        });
        const planRef = await getUserPlanDetails(userAuth);
        if (planRef) {
          planRef.onSnapshot((snapShot) => {
            const { clusterURL, longTermPrice } = snapShot.data();
            setClusterURL(clusterURL);
            setClientMonthlyTotal(longTermPrice);
          });
        }
      }
      if (!userAuth) {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <AlertPopUp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signin"
            render={(routeProps) =>
              this.props.currentUser ? (
                <Redirect to="/console" {...routeProps} />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route
            exact
            path="/plans-and-pricing"
            component={PlansAndPricingPage}
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/console"
            render={() =>
              this.props.currentUser ? (
                <ConsolePage />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setClusterURL: (url) => dispatch(setClusterURL(url)),
  setClientMonthlyTotal: (total) => dispatch(setClientMonthlyTotal(total)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
