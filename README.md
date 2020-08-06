# KubeML

## Introduction

KubeML is a PaaS that directly competes with AWS SageMaker for building, training, and testing machine-learning models. KubeML provisions cloud infrastructure based on client needs and launches a Jupyter Enterprise deployment. Client's access JupyterHub for launching multiple kernels. KubeML deploys the identical, open-source Jupyter IDE environment as AWS SageMaker without the price mark-up.

<!-- ![alt text](./assets/jhub-kernels.jpeg?raw=true) -->

<h4 align="center">KubeML Jupyterhub Notebook</h4>
<p align="center">
  <img src="./assets/KubeML-kernels.jpeg" width="675" title="Kernels">
</p>

<h4 align="center">AWS SageMaker Jupyterhub Notebook</h4>
<p align="center">
  <img src="./assets/SageMaker.png" width="675" title="Kernels">
</p>

<h4 align="center">KubeML Python3 Kernel</h4>
<p align="center">
  <img src="./assets/Kubeml-kernel.jpeg" width="675" title="Kernels">
</p>

<h4 align="center">SageMaker Python3 kernel</h4>
<p align="center">
  <img src="./assets/sagemaker-kernel.png" width="675" title="Kernels">
</p>

<br/>

## Advantages

Based on your organization's usage scenario, KubeML sizes ec2 reserved instances and/or on-Demand instances. KubeML is cheaper than SageMaker in both on-Demand and reserved instances. AWS marks up SageMaker ec2 instances 40% higher vs on-Demand and 222% vs reserved instances.

Pricing Example for m5.2xlarge:

- SageMaker: \$0.538/hr
- KubeML-onDemand: \$0.384/hr
- KubeML-reserved: \$0.242/hr

<h4 align="center">AWS ec2 onDemand Pricing</h4>
<p align="center">
  <img src="./assets/m4-ec2-onDemand.png" width="550" title="Kernels">
</p>

<p align="center">
  <img src="./assets/m5-ec2-pricing-onDemand.png" width="550" title="Kernels">
</p>

<h4 align="center">AWS SageMaker Pricing</h4>
<p align="center">
  <img src="./assets/AWS-sagemaker-pricing.png" width="400" height="450" title="Kernels">
</p>

<br/>

## How it works

KubeML leverages Kubernetes to efficiently distribute user notebook instances and user kernels across cloud infrastructure.

<p align="center">
  <img src="./assets/diagram-one.jpg" width="850" title="Kernels">
</p>

## Current Features

KubeML is currently only offering 30 minute trials

<p align="center">
  <img src="./assets/recording-1.gif" width="850" title="Kernels">
</p>
