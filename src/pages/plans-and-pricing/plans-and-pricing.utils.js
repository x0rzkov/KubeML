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
    ec2: PRICE_DATA.ec2,
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
