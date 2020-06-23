import { PlansAndPricingTypes } from "./plans-and-pricing.action-types";

const {
  SET_CLIENT_CONFIG_DETAILS,
  SET_CLIENT_NODE_INFO,
  SET_CLIENT_MONTHLY_TOTAL,
  SET_CLIENT_CLUSTER_URL,
  CLEAR_PLAN_DETAILS,
} = PlansAndPricingTypes;

const INITIAL_STATE = {
  newPlanConfig: null,
  clientsRequiredNodes: null,
  monthlyTotal: null,
  clusterUrl: null,
  clusterInitializing: false,
};

const plansAndPricingReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CLIENT_CONFIG_DETAILS:
      return {
        ...state,
        newPlanConfig: payload,
      };
    case SET_CLIENT_NODE_INFO:
      return {
        ...state,
        clientsRequiredNodes: payload,
      };
    case SET_CLIENT_MONTHLY_TOTAL:
      return {
        ...state,
        monthlyTotal: payload,
        clusterInitializing: true,
      };
    case SET_CLIENT_CLUSTER_URL:
      return {
        ...state,
        clusterUrl: payload,
        clusterInitializing: false,
      };
    case CLEAR_PLAN_DETAILS:
      return {
        ...state,
        newPlanConfig: null,
        clientsRequiredNodes: null,
        monthlyTotal: null,
        clusterUrl: null,
        clusterInitializing: false,
      };
    default:
      return state;
  }
};

export default plansAndPricingReducer;
