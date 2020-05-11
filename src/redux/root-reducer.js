import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import userReducer from "./user/user.reducer";
import plansAndPricingReducer from "./plans-and-pricing/plans-and-pricing.reducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["plansAndPricing"],
};

const rootReducer = combineReducers({
  user: userReducer,
  plansAndPricing: plansAndPricingReducer,
});

export default persistReducer(persistConfig, rootReducer);
