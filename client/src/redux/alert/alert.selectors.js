import { createSelector } from "reselect";

const selectAlert = (state) => state.alert;

export const selectNewAlert = createSelector([selectAlert], (alert) => alert);
