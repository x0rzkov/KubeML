import React from "react";
import PermanentDrawerLeft from "../components/material-ui/permanent-drawer.component";
import { Card, Button, Container } from "react-bootstrap";

const ConsolePage = () => (
  <Container fluid style={{ paddingRight: 40, paddingLeft: 300 }}>
    <PermanentDrawerLeft />
    <Card className="my-3">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatments</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="my-3">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Container>
);

export default ConsolePage;
