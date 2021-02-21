import React, { useState } from "react";
import { editMessage, deleteMessage } from "../actions/messageActions";
import { useDispatch } from "react-redux";

const Message = ({ message }) => {
  const [stateMessage, setMessage] = useState(message.text || "");

  const dispatch = useDispatch();

  const handleEditMessage = (e) => {
    e.preventDefault();
    dispatch(editMessage(message.id, stateMessage));
    console.log("BLURRING");
  };

  const handleDeleteMessage = (e) => {
    e.preventDefault();
    dispatch(deleteMessage(message.id));
    console.log("DELETING");
  };

  return (
    <form onSubmit={(e) => handleDeleteMessage(e)}>
      <input
        onChange={(e) => setMessage(e.target.value)}
        onBlur={(e) => handleEditMessage(e)}
        id="message-input"
        name="message"
        value={stateMessage}
      ></input>
      <button>DELETE</button>
    </form>
  );
};

export default Message;
