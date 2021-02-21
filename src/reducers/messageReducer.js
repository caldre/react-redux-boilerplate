import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  EDIT_MESSAGE,
} from "../actions/actionTypes";

export const messageReducer = (messageList = [], action) => {
  let arrayOfIds = [];
  let indexOfItem;
  switch (action.type) {
    case ADD_MESSAGE:
      // console.log("REDUCER: Adding message to list");
      return [...messageList, action.payload];

    case EDIT_MESSAGE:
      // console.log("REDUCER: Editing message");
      messageList.forEach((message) => arrayOfIds.push(message.id));
      indexOfItem = arrayOfIds.indexOf(action.payload.id);
      messageList[indexOfItem].text = action.payload.text;
      return [...messageList];

    case DELETE_MESSAGE:
      // console.log("REDUCER: Removing message from list");
      const newState = messageList.filter(
        (message) => message.id !== action.payload
      );
      return [...newState];

    default:
      return [...messageList];
  }
};
