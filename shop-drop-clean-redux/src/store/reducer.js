import { createReducer } from "@reduxjs/toolkit";
import { actionCreators } from "./actions";

const initialState = {
  items: []
};

export default createReducer(initialState, {
  [actionCreators.addToList]: (state, action) => {
    state.items.push({
      id: state.items.length,
      value: action.payload,
      inBasket: false
    });
  },
  [actionCreators.addToBasket]: (state, action) => {
    state.items[action.payload].inBasket = true;
  },
  [actionCreators.removeItem]: (state, action) => {
    state.items = state.items.filter((item, index) => index !== action.payload);
  },
  [actionCreators.clearItems]: (state, action) => {
    state.items = [];
  }
});
