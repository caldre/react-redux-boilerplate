import React, { useState } from "react";
import { addMessage } from "../actions/messageActions";
import { useDispatch } from "react-redux";

const MessageInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleAddMessage = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addMessage(text));
      setText("");
    }
  };

  return (
    <div className="message-input-wrapper">
      <form onSubmit={(e) => handleAddMessage(e)}>
        <input
          className="message-input"
          name="message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter message.."
        ></input>
        <button className="submit-btn">--></button>
      </form>
    </div>
  );
};

export default MessageInput;
