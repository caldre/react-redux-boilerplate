<<<<<<< HEAD
import { ADD_MESSAGE } from "../actions/actionTypes";

export const messageReducer = (messagelist = [], action) => {
  if (action.type == ADD_MESSAGE) {
    return [...messagelist, action.payload];
  } else return [...messagelist];
=======
export const messageReducer = (messageList = [], action) => {
  return [...messageList];
>>>>>>> 43c0184b70108245571e87ef1d225c9441549044
};
