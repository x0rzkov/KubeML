import React from "react";
import { Container, Row } from "react-bootstrap";
import SignIn from "../components/sign-in/sign-in.component";
import SignUp from "../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <Container>
    <Row className="row-inner spread py-row-4">
      <SignIn />
      <SignUp />
    </Row>
  </Container>
);

export default SignInAndSignUpPage;
