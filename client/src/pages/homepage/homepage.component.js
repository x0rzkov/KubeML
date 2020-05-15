import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./homepage.styles.js";

import { ReactComponent as Logo } from "../../assets/Latest-diagram.svg";
import { ReactComponent as Logo2 } from "../../assets/JupyterHub.svg";
import { ReactComponent as Logo3 } from "../../assets/Jupyter-Notebook.svg";
import { ReactComponent as Logo4 } from "../../assets/Scalability.svg";

const HomePage = () => (
  <Container fluid style={styles.container}>
    <Row style={{ ...styles.row, backgroundColor: "#1a75ff" }}>
      <Row style={styles.innerRow}>
        <Col style={{ ...styles.col, alignItems: "center", height: 300 }}>
          <h1 className="x-large">Welcome to KubeML</h1>
          <p className="lead">
            An online platform for building, training, and testing
            machine-learning workloads
          </p>
        </Col>
      </Row>
    </Row>

    <Row style={{ ...styles.row, backgroundColor: "#f8f8f8" }}>
      <Row style={styles.innerRow}>
        <Col style={styles.col} lg={5} xl={6}>
          <h3 style={{ marginBottom: 30 }}>
            KubeML is a turn-key solution for running data-science workloads
            efficiently, collaboratively, and anywhere anytime.
          </h3>
          <p style={styles.text}>
            KubeML provides clients access to a fully-managed cluster hosted on
            cloud infrastructure. The KubeML team provides an online IDE powered
            by Jupyter Notebooks connected to a gateway which leverages
            kubernetes to efficiently distribute individual kernels across the
            cluster
          </p>
        </Col>
        <Col style={styles.col} lg={7} xl={6}>
          <Logo style={{ height: 400, width: "100%" }} />
        </Col>
      </Row>
    </Row>

    <Row style={{ ...styles.row, backgroundColor: "#e8e8e8" }}>
      <Row style={{ ...styles.innerRow, paddingTop: 75, paddingBottom: 75 }}>
        <Col style={styles.col} xl={4}>
          <Logo2 style={{ width: "100%", paddingRight: 15 }} />
        </Col>
        <Col style={styles.col} xl={8}>
          <h3>Powered by Jupyter Notebooks</h3>
          <p style={styles.text}>
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

    <Row style={styles.row}>
      <Row style={styles.innerRow}>
        <Col style={styles.col} xl={4}>
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

        <Col style={styles.col} xl={8}>
          <Logo3 style={{ width: "100%", height: 530 }} />
        </Col>
      </Row>
    </Row>

    <Row style={{ ...styles.row, backgroundColor: "#e8e8e8" }}>
      <Row style={styles.innerRow}>
        <Col style={styles.col}>
          <h3 style={{ marginBottom: 10 }}>
            Scale worry-free as your organization grows
          </h3>
          <p style={styles.text}>
            As your organization expands and adds more developers to the team,
            KubeML leverages kubernetes to provide Jupyterhub and Enterprise
            gateway as highly-available deployments. KubeML also provides
            resources for clients seeking to provide various levels of compute
            power to different teams within their organization.
          </p>
          <p style={{ ...styles.text, marginBottom: 30 }}>
            As your organization expands and adds more developers to the team,
            KubeML leverages kubernetes to provide Jupyterhub and Enterprise
            gateway as highly-available deployments.
          </p>
          <Logo4 style={{ width: "100%", height: 530 }} />
        </Col>
      </Row>
    </Row>
  </Container>
);

export default HomePage;
