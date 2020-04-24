import { PlansAndPricingTypes } from "./plans-and-pricing.action-types";

const { SET_NEW_PLAN_CONFIG } = PlansAndPricingTypes;

export const setNewPlanConfig = (planDetails) => ({
  type: SET_NEW_PLAN_CONFIG,
  payload: planDetails,
});
