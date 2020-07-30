import { AlertActionTypes } from "./alert.types";

const { SET_ALERT, REMOVE_ALERT } = AlertActionTypes;

export const setAlert = (alertDetails) => async (dispatch) => {
  try {
    dispatch({
      type: SET_ALERT,
      payload: alertDetails,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeAlert = () => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_ALERT,
    });
  } catch (err) {
    console.log(err);
  }
};
