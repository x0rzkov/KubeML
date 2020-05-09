import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CarouselSlide from "../../components/bootstrap-ui/carousel/carousel.component";
import PricingCard from "../../components/bootstrap-ui/pricing-card/pricing-card.component";
import SelectForm from "../../components/bootstrap-ui/forms/form-select.component";
import FormNumberInput from "../../components/bootstrap-ui/forms/form-number-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import styles from "./plans-and-pricing.styles.js";
import {
  setNewPlanConfig,
  setClientsNodeInfo,
} from "../../redux/plans-and-pricing/plans-and-pricing.actions";
import { sizeNodeInstance } from "./plans-and-pricing.utils";

const ramArray = [8, 16, 32, 64, 160, 196];
const hoursArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const longhoursArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

class PlansAndPricingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avgUsers: 0,
      avgKernels: 0,
      percentLongWorkloads: 0,
      longKernelHrs: 0,
      shortKernelHrs: 0,
      minRAM: 0,
      longTermNodes: [],
      shortTermNodes: [],
      prices: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    // saving client org usage info to redux store
    const { setNewPlanConfig } = this.props;
    setNewPlanConfig({
      avgUsers: this.state.avgUsers,
      avgKernels: this.state.avgKernels,
      percentLongWorkloads: this.state.percentLongWorkloads,
      longKernelHrs: this.state.longKernelHrs,
      shortKernelHrs: this.state.shortKernelHrs,
      minRAM: this.state.minRAM,
    });
    const res = sizeNodeInstance(this.state);
    this.setState({
      longTermNodes: res.continuousNodes,
      shortTermNodes: res.onDemandNodes,
      prices: res.prices,
    });
  };

  handleCheckout = () => {
    const { setClientsNodeInfo } = this.props;
    setClientsNodeInfo(this.state.longTermNodes);
    const { history } = this.props;
    history.push("/checkout");
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Row style={styles.row1}>
          <CarouselSlide />
        </Row>
        <Row>
          <Col lg="8">
            <h2 style={styles.h2}>
              Let the KubeML pricing tool calculate for you!
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
                label="Enter average runtime (hrs) for kernels running more than
                  10hrs/day"
                controlId="longKernelHrs"
                numArray={longhoursArray}
                name="longKernelHrs"
                value={this.state.longKernelHrs}
                handleChange={this.handleChange}
              />
              <SelectForm
                label="Enter average runtime (hrs) for kernels running less than
                  10hrs/day"
                controlId="shortKernelHrs"
                numArray={hoursArray}
                name="shortKernelHrs"
                value={this.state.shortKernelHrs}
                handleChange={this.handleChange}
              />
              <SelectForm
                label="Enter minimum RAM (GB) desired per kernel"
                controlId="minRAM"
                numArray={ramArray}
                name="minRAM"
                value={this.state.minRAM}
                handleChange={this.handleChange}
              />
              <CustomButton type="submit" style={styles.CustomButton}>
                Check Price
              </CustomButton>
            </Form>
            <div style={styles.buttonDiv}>
              <CustomButton
                handlePress={this.handleCheckout}
                style={styles.CustomButton2}
              >
                Proceed to Checkout
              </CustomButton>
            </div>
          </Col>

          <Col lg="4" style={styles.col2}>
            <PricingCard
              prices={this.state.prices}
              longTermNodes={this.state.longTermNodes}
              shortTermNodes={this.state.shortTermNodes}
              longKernelHrs={this.state.longKernelHrs}
              shortKernelHrs={this.state.shortKernelHrs}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export default withRouter(
  connect(mapStateToProps, { setNewPlanConfig, setClientsNodeInfo })(
    PlansAndPricingPage
  )
);
