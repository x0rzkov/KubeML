import { AlertActionTypes } from "./alert.types";

const { SET_ALERT, REMOVE_ALERT } = AlertActionTypes;

const INITIAL_STATE = {
  show: false,
  variant: "danger",
  message: "no alerts to show",
};

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        show: action.payload.show,
        variant: action.payload.variant,
        message: action.payload.message,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        show: false,
        variant: "danger",
        message: "no alerts to show",
      };
    default:
      return state;
  }
};

export default alertReducer;
