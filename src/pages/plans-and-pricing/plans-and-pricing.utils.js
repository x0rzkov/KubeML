import PRICE_DATA from "./price-data";

// function that takes in client usage parameters and returns
// ec2 Nodes needed long-term and cost of KubeML vs competitors
export const sizeNodeInstance = (configDetails) => {
  const {
    avgUsers,
    avgKernels,
    percentLongWorkloads,
    avgShortKernelHrs,
    minRAM,
  } = configDetails;

  var totalStableMinRAM = avgUsers * avgKernels * percentLongWorkloads * minRAM;

  const customerNodes = {
    ec2: PRICE_DATA.ec2,
  };

  const longTermNodes = [];
  var KubeML = 0;
  var SageMaker = 0;

  // Begin algorithm
  // while loop which calculates needed node types and quantity
  while (totalStableMinRAM >= 0) {
    for (var i = 0; i <= 7; i++) {
      if (totalStableMinRAM > customerNodes.ec2[7].RAM) {
        totalStableMinRAM = totalStableMinRAM - customerNodes.ec2[7].RAM;
        customerNodes.ec2[7].quantity = customerNodes.ec2[7].quantity + 1;
        break;
      }

      if (totalStableMinRAM <= customerNodes.ec2[i].RAM) {
        totalStableMinRAM = totalStableMinRAM - customerNodes.ec2[i].RAM;
        customerNodes.ec2[i].quantity = customerNodes.ec2[i].quantity + 1;
        break;
      }

      if (totalStableMinRAM <= 0) {
        break;
      }
    }
  }

  // adds nodes to array where node quantity is greater than 1
  customerNodes.ec2.forEach((data) => {
    if (data.quantity > 0) {
      longTermNodes.push({
        type: data.type,
        quantity: data.quantity,
        KubeML_price: 24 * 31 * data.quantity * data.Long_Term,
        SageMaker_price: 24 * 31 * data.quantity * data.SageMaker,
      });
      console.log(data);
    }
  });

  // aggregates price for all long-term node instances
  longTermNodes.forEach((item) => {
    KubeML = KubeML + item.KubeML_price;
    SageMaker = SageMaker + item.SageMaker_price;
  });

  const returnObject = {
    nodesArray: longTermNodes,
    KubeML,
    SageMaker,
  };

  return returnObject;
};
