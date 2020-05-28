import PRICE_DATA from "../../redux/plans-and-pricing/price-data";
// function that takes in client usage parameters and returns
// ec2 Nodes needed long-term and cost of KubeML vs competitors
export const sizeNodeInstance = (configDetails) => {
  const {
    avgUsers,
    avgKernels,
    percentLongWorkloads,
    longKernelHrs,
    shortKernelHrs,
    minRAM,
  } = configDetails;

  const array1 = [];
  const array2 = [];
  var longKubePrice = 0;
  var longSagePrice = 0;
  var shortKubePrice = 0;
  var shortSagePrice = 0;
  var quantity = 0; // quantity for m5.24xlarge node (largest node offered)

  var minLongTermRAM = avgUsers * avgKernels * percentLongWorkloads * minRAM;
  console.log("mingLongTermRAM is: ", minLongTermRAM);
  var shortTermKernels = Math.ceil(
    avgUsers * avgKernels * (1 - percentLongWorkloads)
  );

  for (var j = 0; j <= 7; j++) {
    if (minRAM <= PRICE_DATA.ec2[j].RAM) {
      array2.push({
        node: PRICE_DATA.ec2[j],
        quantity: shortTermKernels,
      });
      shortKubePrice =
        shortTermKernels * shortKernelHrs * PRICE_DATA.ec2[j].On_Demand * 31;
      shortSagePrice =
        shortTermKernels * shortKernelHrs * PRICE_DATA.ec2[j].SageMaker * 31;
      break;
    }
  }

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
        array1.push({
          node: PRICE_DATA.ec2[i],
          quantity: 1,
        });
      }
      if (minLongTermRAM <= 0) {
        break;
      }
    }
  }

  if (quantity > 0) {
    array1.push({
      quantity,
      node: PRICE_DATA.ec2[7],
    });
  }

  array1.map((data) => {
    PRICE_DATA.ec2.map((item) => {
      if (data.node.type === item.type) {
        longKubePrice =
          longKubePrice + 31 * 24 * data.quantity * item.Long_Term;
        longSagePrice =
          longSagePrice + 31 * longKernelHrs * data.quantity * item.SageMaker;
      }
    });
  });

  var KubeML_total = longKubePrice + shortKubePrice;
  var SageMaker_total = longSagePrice + shortSagePrice;
  var prices = {
    KubeML_LongTerm: longKubePrice.toFixed(2),
    SageMaker_LongTerm: longSagePrice.toFixed(2),
    KubeML_total: KubeML_total.toFixed(2),
    SageMaker_total: SageMaker_total.toFixed(2),
  };

  var res = {
    continuousNodes: array1,
    onDemandNodes: array2,
    prices,
  };

  return res;
};
