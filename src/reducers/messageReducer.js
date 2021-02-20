import { ADD_MESSAGE } from "../actions/actionTypes";

export const messageReducer = (messagelist = [], action) => {
  if (action.type == ADD_MESSAGE) {
    return [...messagelist, action.payload];
  } else return [...messagelist];
};
