import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import CarouselSlide from "../../components/bootstrap-ui/carousel/carousel.component";
import PricingCard from "../../components/bootstrap-ui/cards/pricing-card.component";
import SelectForm from "../../components/bootstrap-ui/forms/form-select.component";
import FormNumberInput from "../../components/bootstrap-ui/forms/form-number-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./plans-and-pricing.styles.scss";

const ramArray = [8, 16, 32, 64, 160, 196, 256, 384];
const hoursArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class PlansAndPricingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avgUsers: 0,
      avgKernels: 0,
      percentLongWorkloads: 0,
      avgShortKernelHrs: 0,
      minRAM: 0,
      maxRAM: 0,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      avgUsers,
      avgKernels,
      percentLongWorkloads,
      avgShortKernelHrs,
      minRAM,
      maxRAM,
    } = this.state;

    console.log("avgUsers is: ", avgUsers);
    console.log("avgKernels is: ", avgKernels);
    console.log("percentLongWorkloads is: ", percentLongWorkloads);
    console.log("avgShortKernelHrs is: ", avgShortKernelHrs);
    console.log("minRAM is: ", minRAM);
    console.log("maxRAM is: ", maxRAM);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Fragment>
        <Container style={{ marginBottom: 150 }}>
          <Row style={{ marginBottom: 40 }}>
            <CarouselSlide />
          </Row>

          <Row>
            <Col lg="8">
              <h2 style={styles.h2}>
                Let the KubeML pricing tool calculate for you
              </h2>
              <Form onSubmit={this.handleSubmit}>
                <FormNumberInput
                  label="Enter your organizations daily active users (Researches/Data
                    Scientists/ Developers)"
                  controlId="avgUsers"
                  placeholder="Integer"
                  name="avgUsers"
                  value={this.state.avgUsers}
                  handleChange={this.handleChange}
                />
                <FormNumberInput
                  label="Enter average kernels a user utilizes simultaneously for
                  building/training ML models"
                  controlId="avgKernels"
                  placeholder="0.0"
                  name="avgKernels"
                  value={this.state.avgKernels}
                  handleChange={this.handleChange}
                />
                <FormNumberInput
                  label=" Enter percentage of kernels running for 10+ hrs/day"
                  controlId="percentLongWorkloads"
                  placeholder="0.0"
                  name="percentLongWorkloads"
                  value={this.state.percentLongWorkloads}
                  handleChange={this.handleChange}
                />
                <SelectForm
                  label="Enter average runtime (hrs) for kernels running less than
                10hrs/day"
                  controlId="avgShortKernelHrs"
                  numArray={hoursArray}
                  name="avgShortKernelHrs"
                  value={this.state.avgShortKernelHrs}
                  handleChange={this.handleChange}
                />
                <SelectForm
                  label="   Enter minimum RAM (GB) desired per kernel"
                  controlId="minRAM"
                  numArray={ramArray}
                  name="minRAM"
                  value={this.state.minRAM}
                  handleChange={this.handleChange}
                />
                <SelectForm
                  label=" Enter maximum RAM desired (GB) per kernel when no other
                  workloads are running"
                  controlId="maxRAM"
                  numArray={ramArray}
                  name="maxRAM"
                  value={this.state.maxRAM}
                  handleChange={this.handleChange}
                />
                <CustomButton
                  type="submit"
                  style={{
                    marginTop: 50,
                  }}
                >
                  Check Price
                </CustomButton>
              </Form>
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-end",
                }}
              >
                <CustomButton type="submit" style={styles.CustomButton}>
                  Proceed to Checkout
                </CustomButton>
              </div>
            </Col>

            <Col lg="4" style={styles.col}>
              <PricingCard />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default PlansAndPricingPage;

const styles = {
  col: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 0,
  },
  h2: {
    marginBottom: 35,
  },
  CustomButton: {
    marginTop: 150,
  },
};
