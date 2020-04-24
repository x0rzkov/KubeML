import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import plansAndPricingReducer from "./plans-and-pricing/plans-and-pricing.reducer";

export default combineReducers({
  user: userReducer,
  plansAndPricing: plansAndPricingReducer,
});
