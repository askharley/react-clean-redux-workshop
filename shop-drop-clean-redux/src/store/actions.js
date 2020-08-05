import { createActions } from "redux-actions";

export const actionCreators = createActions(
  {},
  "ADD_TO_LIST",
  "ADD_TO_BASKET",
  "REMOVE_ITEM",
  "CLEAR_ITEMS"
);
