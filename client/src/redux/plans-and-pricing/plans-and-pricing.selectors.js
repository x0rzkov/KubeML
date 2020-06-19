import { createSelector } from "reselect";

const selectplanConfig = (state) => state.plansAndPricing;
const selectnodeDetails = (state) => state.plansAndPricing;
const selectmonthlyTotal = (state) => state.plansAndPricing;
const selectclusterURL = (state) => state.plansAndPricing;

export const selectPlanConfig = createSelector(
  [selectplanConfig],
  (plansAndPricing) => plansAndPricing.newPlanConfig
);

export const selectNodeDetails = createSelector(
  [selectnodeDetails],
  (plansAndPricing) => plansAndPricing.clientsRequiredNodes
);

export const selectMonthlyTotal = createSelector(
  [selectmonthlyTotal],
  (plansAndPricing) => plansAndPricing.monthlyTotal
);

export const selectClusterURL = createSelector(
  [selectclusterURL],
  (plansAndPricing) => plansAndPricing.clusterUrl
);
