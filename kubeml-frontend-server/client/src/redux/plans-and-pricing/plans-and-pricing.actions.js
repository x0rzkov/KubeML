import { PlansAndPricingTypes } from "./plans-and-pricing.action-types";

const {
  SET_CLIENT_CONFIG_DETAILS,
  SET_CLIENT_NODE_INFO,
  CLEAR_PLAN_DETAILS,
} = PlansAndPricingTypes;

export const setPlanConfig = (planDetails) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CLIENT_CONFIG_DETAILS,
      payload: planDetails,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setClientsNodeInfo = (nodesArray) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CLIENT_NODE_INFO,
      payload: nodesArray,
    });
  } catch (err) {
    console.log(err);
  }
};

export const clearPlanDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_PLAN_DETAILS,
    });
  } catch (err) {
    console.log(err);
  }
};
