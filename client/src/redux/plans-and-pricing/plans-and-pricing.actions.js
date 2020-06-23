import { PlansAndPricingTypes } from "./plans-and-pricing.action-types";

const {
  SET_CLIENT_CONFIG_DETAILS,
  SET_CLIENT_NODE_INFO,
  SET_CLIENT_CLUSTER_URL,
  SET_CLIENT_MONTHLY_TOTAL,
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

export const setClientMonthlyTotal = (price) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CLIENT_MONTHLY_TOTAL,
      payload: price,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setClusterURL = (url) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CLIENT_CLUSTER_URL,
      payload: url,
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
