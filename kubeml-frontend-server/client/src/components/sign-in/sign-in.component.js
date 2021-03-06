import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { setAlert } from "../../redux/alert/alert.actions";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { setAlert } = this.props;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      setAlert({
        variant: "success",
        show: true,
        message: "Successful sign in!",
      });
    } catch (err) {
      console.log(err);
      setAlert({ variant: "danger", show: true, message: err.message });
    }
  };

  handleGoogleSignIn = async () => {
    const { setAlert } = this.props;
    try {
      await signInWithGoogle();
      setAlert({
        variant: "success",
        show: true,
        message: "Successful sign in!",
      });
    } catch (err) {
      setAlert({ variant: "danger", show: true, message: err.message });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={this.handleGoogleSignIn} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, { setAlert })(SignIn);
