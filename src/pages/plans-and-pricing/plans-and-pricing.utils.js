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

  var minLongTermRAM = avgUsers * avgKernels * percentLongWorkloads * minRAM;

  var KubeML_Price = 0;
  var SageMaker_Price = 0;

  const array1 = [];
  var quantity = 0; // quantity for m5.24xlarge node (largest node offered)
  var secondNodeType = "";

  // Begin algorithm
  while (minLongTermRAM >= 384) {
    minLongTermRAM = minLongTermRAM - 384;
    quantity = quantity + 1;
  }

  while (minLongTermRAM >= 0) {
    for (var i = 0; i <= 7; i++) {
      if (i === 7 && minLongTermRAM > 256) {
        quantity = quantity + 1;
        minLongTermRAM = minLongTermRAM - 384;
        break;
      }
      if (minLongTermRAM <= PRICE_DATA.ec2[i].RAM) {
        minLongTermRAM = minLongTermRAM - PRICE_DATA.ec2[i].RAM;
        secondNodeType = PRICE_DATA.ec2[i].type;
      }
      if (minLongTermRAM <= 0) {
        break;
      }
    }
  }

  array1.push(
    {
      type: quantity > 0 ? "m5.24xlarge" : null,
      quantity,
    },
    {
      type: secondNodeType,
      quantity: 1,
    }
  );

  array1.map((data) => {
    PRICE_DATA.ec2.map((item) => {
      if (data.type === item.type) {
        KubeML_Price = KubeML_Price + 31 * 24 * data.quantity * item.Long_Term;
        SageMaker_Price =
          SageMaker_Price + 31 * 24 * data.quantity * item.SageMaker;
      }
    });
  });

  var res = {
    nodesArray: array1,
    KubeML: KubeML_Price.toFixed(2),
    SageMaker: SageMaker_Price.toFixed(2),
  };

  return res;
};
