import { PlansAndPricingTypes } from "./plans-and-pricing.action-types";

const { SET_NEW_PLAN_CONFIG, SET_CLIENT_NODE_INFO } = PlansAndPricingTypes;

const INITIAL_STATE = {
  newPlanConfig: null,
  clientsRequiredNodes: null,
};

const plansAndPricingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NEW_PLAN_CONFIG:
      return {
        ...state,
        newPlanConfig: action.payload,
      };
    case SET_CLIENT_NODE_INFO:
      return {
        ...state,
        clientsRequiredNodes: action.payload,
      };
    default:
      return state;
  }
};

export default plansAndPricingReducer;
