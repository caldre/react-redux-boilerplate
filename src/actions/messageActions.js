import * as types from "./actionTypes";
import { v4 as uuid } from "uuid";

export const addMessage = (text) => {
  return {
    type: types.ADD_MESSAGE,
    payload: { id: uuid(), text },
  };
};

export const editMessage = (id, text) => {
  return {
    type: types.EDIT_MESSAGE,
    payload: { id, text },
  };
};

export const deleteMessage = (id) => {
  return {
    type: types.DELETE_MESSAGE,
    payload: id,
  };
};
