import { PlansAndPricingTypes } from "./plans-and-pricing.action-types";

const { SET_NEW_PLAN_CONFIG, SET_CLIENT_NODE_INFO } = PlansAndPricingTypes;

export const setNewPlanConfig = (planDetails) => async (dispatch) => {
  try {
    dispatch({
      type: SET_NEW_PLAN_CONFIG,
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
