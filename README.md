# KubeML

## Introduction

KubeML is a PaaS that directly competes with AWS SageMaker for building, training, and testing machine-learning models. KubeML provisions cloud infrastructure based on client needs and launches a Jupyter Enterprise deployment. Client's access JupyterHub for launching multiple kernels. KubeML deploys the identical, open-source Jupyter IDE environment as AWS SageMaker without the price mark-up.

<!-- ![alt text](./assets/jhub-kernels.jpeg?raw=true) -->

<h4 align="center">KubeML Jupyterhub Notebook</h4>
<p align="center">
  <img src="./assets/KubeML-kernels.jpeg" width="750" title="Kernels">
</p>

<h4 align="center">AWS SageMaker Jupyterhub Notebook</h4>
<p align="center">
  <img src="./assets/SageMaker.png" width="750" title="Kernels">
</p>

<h4 align="center">KubeML Python3 Kernel</h4>
<p align="center">
  <img src="./assets/Kubeml-kernel.jpeg" width="750" title="Kernels">
</p>

<h4 align="center">SageMaker Python3 kernel</h4>
<p align="center">
  <img src="./assets/sagemaker-kernel.png" width="750" title="Kernels">
</p>

<br/>

## Advantages

KubeML is significantly cheaper than AWS SageMaker (40% cheaper for on-demand usage, 65% cheaper for long-term usage).

<h4 align="center">AWS ec2 onDemand Pricing</h4>
<p align="center">
  <img src="./assets/m4-ec2-onDemand.png" width="750" title="Kernels">
</p>

<p align="center">
  <img src="./assets/m5-ec2-pricing-onDemand.png" width="750" title="Kernels">
</p>

<h4 align="center">AWS SageMaker Pricing</h4>
<p align="center">
  <img src="./assets/AWS-sagemaker-pricing.png" width="750" title="Kernels">
</p>

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
