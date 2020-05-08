import { createSelector } from "reselect";

const selectplanConfig = (state) => state.plansAndPricing;

const selectNodeDetails = (state) => state.plansAndPricing;

export const selectNewPlanConfig = createSelector(
  [selectplanConfig],
  (plansAndPricing) => plansAndPricing.newPlanConfig
);

export const selectNewNodeDetails = createSelector(
  [selectNodeDetails],
  (plansAndPricing) => plansAndPricing.clientsRequiredNodes
);
