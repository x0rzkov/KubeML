import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as Logo } from "../../assets/Latest-diagram.svg";
import { ReactComponent as Logo2 } from "../../assets/JupyterHub.svg";
import { ReactComponent as Logo3 } from "../../assets/Jupyter-Notebook.svg";
import { ReactComponent as Logo4 } from "../../assets/Scalability.svg";

const HomePage = () => (
  <Container fluid>
    <Row style={{ backgroundColor: "#1a75ff" }}>
      <Row className="row-inner p-row-2">
        <Col className="my-3" style={{ alignItems: "center", height: 300 }}>
          <h1 className="x-large">Welcome to KubeML</h1>
          <p className="lead">
            An online platform for building, training, and testing
            machine-learning workloads
          </p>
        </Col>
      </Row>
    </Row>

    <Row style={{ backgroundColor: "#f8f8f8" }}>
      <Row className="row-inner p-row-2">
        <Col className="col my-3" lg={5} xl={6}>
          <h2>
            KubeML is a turn-key solution for running data-science workloads
            efficiently, collaboratively, and anywhere anytime.
          </h2>
          <p className="home">
            KubeML provides clients access to a fully-managed cluster hosted on
            cloud infrastructure. The KubeML team provides an online IDE powered
            by Jupyter Notebooks connected to a gateway which leverages
            kubernetes to efficiently distribute individual kernels across the
            cluster
          </p>
        </Col>
        <Col className="col  my-3" lg={7} xl={6}>
          <Logo style={{ height: 400, width: "100%" }} />
        </Col>
      </Row>
    </Row>

    <Row style={{ backgroundColor: "#e8e8e8" }}>
      <Row className="row-inner py-row-4">
        <Col className="col my-3" xl={4}>
          <Logo2 style={{ width: "100%", paddingRight: 15 }} />
        </Col>
        <Col className="col my-3" xl={8}>
          <h3>Powered by Jupyter Notebooks</h3>
          <p className="home">
            KubeML utilizes Jupyter's open-source platform and integrates
            JupyterHub with Jupyter Enterprise Gateway. Jupyterhub provides
            clients with a frontend UI to manage users and takes care of
            instantiating notebook server instances for each user. Each
            individual notebook instance is then able to launch multiple kernels
            distributed efficiently across the cluster when connected to
            Enterprise Gateway
          </p>
        </Col>
      </Row>
    </Row>

    <Row>
      <Row className="row-inner p-row-2">
        <Col className="col my-3" xl={4}>
          <h3>A familiar IDE environment for your development team</h3>
          <h5>KubeML provides the following kernels:</h5>
          <ul>
            <li>R</li>
            <li>python</li>
            <li>python_tenserflow_gpu</li>
            <li>python_tenserflow</li>
            <li>scala</li>
            <li>spark_R</li>
            <li>spark_python</li>
            <li>spark_scala</li>
          </ul>
        </Col>

        <Col className="col my-3" xl={8}>
          <Logo3 style={{ width: "100%", height: 530 }} />
        </Col>
      </Row>
    </Row>

    <Row style={{ backgroundColor: "#e8e8e8" }}>
      <Row className="row-inner p-row-2">
        <Col className="my-3">
          <h3>Scale worry-free as your organization grows</h3>
          <p className="home my-2">
            As your organization expands and adds more developers to the team,
            KubeML leverages kubernetes to provide Jupyterhub and Enterprise
            gateway as highly-available deployments. KubeML also provides
            resources for clients seeking to provide various levels of compute
            power to different teams within their organization.
          </p>
          <Logo4 style={{ width: "100%", height: 530 }} />
        </Col>
      </Row>
    </Row>
  </Container>
);

export default HomePage;
