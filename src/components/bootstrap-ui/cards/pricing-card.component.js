import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const PricingCard = () => {
  return (
    <Card style={{ width: "85%", paddingRight: 0 }}>
      <Card.Img
        variant="top"
        src={require("../../../assets/3d.svg")}
        style={{ width: "25%", alignSelf: "center", marginTop: 10 }}
      />
      <Card.Body
        style={{
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <h4>Your cluster configuration:</h4>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Number of Daily Active Users:</ListGroupItem>
        <ListGroupItem>Avg kernels per user: </ListGroupItem>
        <ListGroupItem>% of long-running kernels: </ListGroupItem>
        <ListGroupItem>Avg runtime for short kernels: </ListGroupItem>
        <ListGroupItem>Min RAM desired: </ListGroupItem>
        <ListGroupItem>Max RAM desired: </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Title>AWS Sagemaker pricing</Card.Title>
        <h3>$2,194/mo.</h3>
      </Card.Body>
      <Card.Body>
        <Card.Title>KubeML pricing</Card.Title>
        <h3>$1,853/mo.</h3>
      </Card.Body>
    </Card>
  );
};

export default PricingCard;
