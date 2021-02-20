import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  EDIT_MESSAGE,
} from "../actions/actionTypes";

export const messageReducer = (messagelist = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...messagelist, action.payload];

    case EDIT_MESSAGE:
      return;

    case DELETE_MESSAGE:
      return;

    default:
      return [...messagelist];
  }
};
