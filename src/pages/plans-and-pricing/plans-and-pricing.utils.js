import PRICE_DATA from "./price-data";

// function that takes in client usage parameters and returns
// ec2 Nodes needed long-term and cost of KubeML vs competitors
export const sizeNodeInstance = (configDetails) => {
  const {
    avgUsers,
    avgKernels,
    percentLongWorkloads,
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
  var shortTermKernels = Math.ceil(
    avgUsers * avgKernels * (1 - percentLongWorkloads)
  );

  for (var j = 0; j <= 7; j++) {
    if (minRAM <= PRICE_DATA.ec2[j].RAM) {
      array2.push({
        type: PRICE_DATA.ec2[j].type,
        quantity: shortTermKernels,
        vCPU: PRICE_DATA.ec2[j].vCPU,
        RAM: PRICE_DATA.ec2[j].RAM,
        Processor_Name: PRICE_DATA.ec2[j].Processor_Name,
        Clock_Speed: PRICE_DATA.ec2[j].Clock_Speed,
        SageMaker: PRICE_DATA.ec2[j].SageMaker,
        On_Demand: PRICE_DATA.ec2[j].On_Demand,
        Long_Term: PRICE_DATA.ec2[j].Long_Term,
      });
      shortKubePrice =
        shortTermKernels * shortKernelHrs * PRICE_DATA.ec2[j].On_Demand * 744;
      shortSagePrice =
        shortTermKernels * shortKernelHrs * PRICE_DATA.ec2[j].SageMaker * 744;
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
          type: PRICE_DATA.ec2[i].type,
          quantity: 1,
          vCPU: PRICE_DATA.ec2[i].vCPU,
          RAM: PRICE_DATA.ec2[i].RAM,
          Processor_Name: PRICE_DATA.ec2[i].Processor_Name,
          Clock_Speed: PRICE_DATA.ec2[i].Clock_Speed,
          SageMaker: PRICE_DATA.ec2[i].SageMaker,
          On_Demand: PRICE_DATA.ec2[i].On_Demand,
          Long_Term: PRICE_DATA.ec2[i].Long_Term,
        });
      }
      if (minLongTermRAM <= 0) {
        break;
      }
    }
  }

  array1.push({
    type: quantity > 0 ? "m5.24xlarge" : null,
    quantity,
    vCPU: 96,
    RAM: 384,
    Processor_Name: "Intel Xeon Platinum 8175",
    Clock_Speed: 3.1,
    SageMaker: 6.451,
    On_Demand: 4.128,
    Long_Term: 2.627,
  });

  array1.map((data) => {
    PRICE_DATA.ec2.map((item) => {
      if (data.type === item.type) {
        longKubePrice =
          longKubePrice + 31 * 24 * data.quantity * item.Long_Term;
        longSagePrice =
          longSagePrice + 31 * 24 * data.quantity * item.SageMaker;
      }
    });
  });

  var KubeML_total = longKubePrice + shortKubePrice;
  var SageMaker_total = longSagePrice + shortSagePrice;

  var res = {
    nodesArray: array1,
    KubeML: KubeML_total.toFixed(2),
    SageMaker: SageMaker_total.toFixed(2),
    array2,
  };

  return res;
};
