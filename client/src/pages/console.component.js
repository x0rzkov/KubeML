import React from "react";
import PermanentDrawerLeft from "../components/material-ui/permanent-drawer.component";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Card, Container, Row, Col } from "react-bootstrap";
import CustomButton from "../components/custom-button/custom-button.component";
import { selectCurrentUser } from "../redux/user/user.selectors";
import {
  selectMonthlyTotal,
  selectClusterURL,
} from "../redux/plans-and-pricing/plans-and-pricing.selectors";

const ConsolePage = ({ monthlyTotal, clusterUrl, currentUser }) => {
  const handlePlanPress = (e) => {
    e.preventDefault();
    window.location.href = `https://${clusterUrl}`;
  };

  return (
    <Container
      fluid
      style={{ paddingRight: 40, paddingLeft: 300, backgroundColor: "#f2f3f3" }}
    >
      <PermanentDrawerLeft />
      <Row>
        <Col style={{ marginTop: 15 }}>
          <h4 style={{ fontWeight: "bold" }}>
            Welcome {currentUser.displayName}
          </h4>
        </Col>
      </Row>
      <Row style={{ marginBottom: 15 }}>
        <Col>
          <Card className="my-3">
            <Card.Header>
              <h5 style={{ paddingTop: 5, fontWeight: "bold" }}>
                Access your KubeML Cluster
              </h5>
            </Card.Header>
            {clusterUrl ? (
              <Card.Body>
                <Card.Title>Access cluster</Card.Title>
                <Card.Text>
                  Click on the button below to access KubeML's admin panel.
                </Card.Text>

                <CustomButton variant="primary" handlePress={handlePlanPress}>
                  {clusterUrl}
                </CustomButton>
              </Card.Body>
            ) : (
              <Card.Body>
                <Card.Title>Create a cluster</Card.Title>
                <Card.Text>
                  Explore KubeML's tailored cluster options and compare with our
                  top competitors. Click the button below to explore our plans
                  and pricing page
                </Card.Text>
                <Link to="/plans-and-pricing">
                  <CustomButton>Configure Plans</CustomButton>
                </Link>
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="my-3">
            <Card.Header>
              <h5 style={{ paddingTop: 5, fontWeight: "bold" }}>
                View your billing details
              </h5>
            </Card.Header>
            <Card.Body>
              <Card.Title>Continuous running nodes:</Card.Title>
              <Card.Text>
                Your monthly total for Continuous running nodes. This is a fixed
                monthly price
              </Card.Text>
              <h5>{monthlyTotal ? { monthlyTotal } / 100 : "$"} </h5>
            </Card.Body>
            <Card.Body>
              <Card.Title>On-demand nodes:</Card.Title>
              <Card.Text>
                Your on-demand usage will be updated daily! Contact KubeML for
                more information.
              </Card.Text>
              <h5>$</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  monthlyTotal: selectMonthlyTotal,
  clusterUrl: selectClusterURL,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ConsolePage);
