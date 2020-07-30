import { createSelector } from "reselect";

const selectplanConfig = (state) => state.plansAndPricing;
const selectnodeDetails = (state) => state.plansAndPricing;

export const selectPlanConfig = createSelector(
  [selectplanConfig],
  (plansAndPricing) => plansAndPricing.newPlanConfig
);

export const selectNodeDetails = createSelector(
  [selectnodeDetails],
  (plansAndPricing) => plansAndPricing.clientsRequiredNodes
);
