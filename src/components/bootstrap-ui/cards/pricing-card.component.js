import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const PricingCard = () => {
  return (
    <Card style={{ width: "80%", paddingRight: 0 }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Titles</Card.Title>
        <Card.Text>
          Based on specifications you selected this is your determined usage and
          what KubeML calculates your usage to be
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Number of Average Users Daily: </ListGroupItem>
        <ListGroupItem>Consistent workloads of 10+ hrs yields: </ListGroupItem>
        <ListGroupItem>Minimum RAM per consistent Workload: </ListGroupItem>
        <ListGroupItem>Long term cluster EC2 NODE: m4.12xlarge </ListGroupItem>
        <ListGroupItem>Number of Average Users Daily: </ListGroupItem>
        <ListGroupItem>Consistent workloads of 10+ hrs yields: </ListGroupItem>
        <ListGroupItem>Minimum RAM per consistent Workload: </ListGroupItem>
        <ListGroupItem>Long term cluster EC2 NODE: m4.12xlarge </ListGroupItem>
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
