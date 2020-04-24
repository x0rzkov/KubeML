import { createSelector } from "reselect";

const selectplanConfig = (state) => state.plansAndPricing;

export const selectNewPlanConfig = createSelector(
  [selectplanConfig],
  (plansAndPricing) => plansAndPricing.newPlanConfig
);
