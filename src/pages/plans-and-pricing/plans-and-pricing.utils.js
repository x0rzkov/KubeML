import PRICE_DATA from "./price-data";

export const sizeNodeInstance = (configDetails) => {
  const {
    avgUsers,
    avgKernels,
    percentLongWorkloads,
    avgShortKernelHrs,
    minRAM,
  } = configDetails;

  const totalStableMinRAM =
    avgUsers * avgKernels * percentLongWorkloads * minRAM;

  console.log("total stable min ram:  ", totalStableMinRAM);
  var totalStableMinRAM2 = totalStableMinRAM;

  const customerNodes = {
    ec2: [
      {
        _id: 0,
        type: "t3.large",
        vCPU: 2,
        RAM: 8,
        SageMaker: 0.1165,
        On_Demand: 0.0752,
        Long_Term: 0.047,
        quantity: 0,
      },
      {
        _id: 1,
        type: "m5.xlarge",
        vCPU: 4,
        RAM: 16,
        SageMaker: 0.269,
        On_Demand: 0.172,
        Long_Term: 0.109,
        quantity: 0,
      },
      {
        _id: 2,
        type: "m5.2xlarge",
        vCPU: 8,
        RAM: 32,
        SageMaker: 0.538,
        On_Demand: 0.344,
        Long_Term: 0.219,
        quantity: 0,
      },
      {
        _id: 3,
        type: "m5.4xlarge",
        vCPU: 16,
        RAM: 64,
        SageMaker: 1.075,
        On_Demand: 0.688,
        Long_Term: 0.438,
        quantity: 0,
      },
      {
        _id: 4,
        type: "m4.10xlarge",
        vCPU: 40,
        RAM: 160,
        SageMaker: 2.8,
        On_Demand: 2.0,
        Long_Term: 1.239,
        quantity: 0,
      },
      {
        _id: 5,
        type: "m5.12xlarge",
        vCPU: 48,
        RAM: 196,
        SageMaker: 3.226,
        On_Demand: 2.064,
        Long_Term: 1.313,
        quantity: 0,
      },
      {
        _id: 6,
        type: "m4.16xlarge",
        vCPU: 64,
        RAM: 256,
        SageMaker: 4.48,
        On_Demand: 3.2,
        Long_Term: 1.982,
        quantity: 0,
      },
      {
        _id: 7,
        type: "m5.24xlarge",
        vCPU: 96,
        RAM: 384,
        SageMaker: 6.451,
        On_Demand: 4.128,
        Long_Term: 2.627,
        quantity: 0,
      },
    ],
  };

  // Begin algorithm
  while (totalStableMinRAM2 >= 0) {
    for (var i = 0; i <= 7; i++) {
      if (totalStableMinRAM2 > customerNodes.ec2[7].RAM) {
        totalStableMinRAM2 = totalStableMinRAM2 - customerNodes.ec2[7].RAM;
        customerNodes.ec2[7].quantity = customerNodes.ec2[7].quantity + 1;
        break;
      }

      if (totalStableMinRAM2 <= customerNodes.ec2[i].RAM) {
        totalStableMinRAM2 = totalStableMinRAM2 - customerNodes.ec2[i].RAM;
        customerNodes.ec2[i].quantity = customerNodes.ec2[i].quantity + 1;
        break;
      }

      if (totalStableMinRAM2 <= 0) {
        break;
      }
    }
  }

  console.log(customerNodes);
};
