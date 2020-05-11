import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import plansAndPricingReducer from "./plans-and-pricing/plans-and-pricing.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["plansAndPricing"],
};

const rootReducer = combineReducers({
  user: userReducer,
  plansAndPricing: plansAndPricingReducer,
});

export default persistReducer(persistConfig, rootReducer);
