import { PlansAndPricingTypes } from "./plans-and-pricing.action-types";

const { SET_NEW_PLAN_CONFIG } = PlansAndPricingTypes;

const INITIAL_STATE = {
  newPlanConfig: null,
};

const plansAndPricingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NEW_PLAN_CONFIG:
      return {
        ...state,
        newPlanConfig: action.payload,
      };
    default:
      return state;
  }
};

export default plansAndPricingReducer;
