import React from "react";
import PermanentDrawerLeft from "../components/material-ui/permanent-drawer.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import {
  selectMonthlyTotal,
  selectClusterURL,
} from "../redux/plans-and-pricing/plans-and-pricing.selectors";

const ConsolePage = ({ monthlyTotal, clusterUrl }) => {
  return (
    <Container fluid style={{ paddingRight: 40, paddingLeft: 300 }}>
      <PermanentDrawerLeft />
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

                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `https://${clusterUrl}`;
                  }}
                >
                  {clusterUrl}
                </Button>
              </Card.Body>
            ) : (
              <Card.Body>
                <Card.Title>Create a cluster</Card.Title>
                <Card.Text>
                  Explore KubeML's tailored cluster options and compare with our
                  top competitors. Click the button below to explore our plans
                  and pricing page
                </Card.Text>
                <Button variant="primary">Configure Plans</Button>
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
              <h5>{{ monthlyTotal } / 100}</h5>
            </Card.Body>
            <Card.Body>
              <Card.Title>On-demand nodes:</Card.Title>
              <Card.Text>
                Your on-demand usage will be updated daily! Contact KubeML for
                more information.
              </Card.Text>
              <h5>$x,xxx.xx</h5>
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
});

export default connect(mapStateToProps)(ConsolePage);
