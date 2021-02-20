import React, { useState } from "react";
import { addMessage, editMessage } from "../actions/messageActions";
import { useDispatch } from "react-redux";

const Message = ({ message, button }) => {
  const [stateMessage, setMessage] = useState(message || "");

  const dispatch = useDispatch();

  const handleAddMessage = (e) => {
    e.preventDefault();
    dispatch(addMessage(message));
    setMessage("");
  };

  const handleEditMessage = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => handleAddMessage(e)}>
      <input
        id="message-input"
        name="message"
        value={stateMessage}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message.."
      ></input>
      <button>{button}</button>
    </form>
  );
};

export default Message;
