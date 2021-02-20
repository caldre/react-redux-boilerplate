import * as types from './actionTypes';

export const addMessage = (message) => {
  return {
    type: types.ADD_MESSAGE,
    payload: message
  };
}

export const editMessage = (id, message) => {
  return {
    type: types.EDIT_MESSAGE,
    payload: { id, message }
  }
}

export const deleteMessage = (id) => {
  return {
    type: types.DELETE_MESSAGE, 
    payload: id
  }
}