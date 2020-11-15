import React from "react";
import PermanentDrawerLeft from "../components/material-ui/permanent-drawer.component";
import { Card, Button, Container } from "react-bootstrap";

const ConsolePage = () => (
  <Container fluid style={{ paddingRight: 40, paddingLeft: 300 }}>
    <PermanentDrawerLeft />
    <Card className="my-3">
      <Card.Header>
        <h5 style={{ paddingTop: 5, fontWeight: "bold" }}>
          Access your KubeML Cluster
        </h5>
      </Card.Header>
      <Card.Body>
        <Card.Title>Create a cluster</Card.Title>
        <Card.Text>
          Explore KubeML's tailored cluster options and compare with our top
          competitors. Click the button below to explore our plans and pricing
          page
        </Card.Text>
        <Button variant="primary">Configure Cluster</Button>
      </Card.Body>
    </Card>
  </Container>
);

export default ConsolePage;
