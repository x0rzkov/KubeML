import React from "react";
import PermanentDrawerLeft from "../../components/material-ui/permanent-drawer.component";
import { Card, Button, Container } from "react-bootstrap";
import styles from "./console.styles";

const ConsolePage = () => (
  <Container fluid style={styles.container}>
    <PermanentDrawerLeft />
    <Card style={styles.row}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatments</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={styles.row}>
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
