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

  var longTermNodes = [];
  var KubeML_Price = 0;
  var SageMaker_Price = 0;

  const array1 = [];
  var quantity = 0;
  var secondNodeType = "";

  // Begin algorithm
  while (minLongTermRAM >= 384) {
    minLongTermRAM = minLongTermRAM - 384;
    quantity = quantity + 1;
  }

  while (minLongTermRAM >= 0) {
    for (var i = 0; i <= 7; i++) {
      if (i == 7 && minLongTermRAM > 256) {
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
      type: "m5.24xlarge",
      quantity,
    },
    {
      type: secondNodeType,
      quantity: 1,
    }
  );

  // // adds nodes to array where node quantity is greater than 1
  // console.log("point B");
  // customerNodes.ec2.map((data) => {
  //   if (data.quantity > 0) {
  //     longTermNodes.push({
  //       type: data.type,
  //       quantity: data.quantity,
  //       KubeML_price: 24 * 31 * data.quantity * data.Long_Term,
  //       SageMaker_price: 24 * 31 * data.quantity * data.SageMaker,
  //     });
  //   }
  // });

  // // aggregates price for all long-term node instances
  // console.log("point C");
  // longTermNodes.forEach((item) => {
  //   KubeML = KubeML + item.KubeML_price;
  //   SageMaker = SageMaker + item.SageMaker_price;
  // });

  // var returnObject = {
  //   nodesArray: longTermNodes,
  //   KubeML: KubeML.toFixed(2),
  //   SageMaker,
  // };

  // console.log("inside the function return object --> ", returnObject);

  // return returnObject;
};
