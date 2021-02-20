import React, { useState } from "react";
import { addMessage } from "../actions/messageActions";
import { useDispatch } from "react-redux";

const MessageInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleAddMessage = (e) => {
    e.preventDefault();
    dispatch(addMessage(text));
    setText("");
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleAddMessage(e)}>
        <input
          id="message-input"
          name="message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter message.."
        ></input>
        <button>ADD MESSAGE</button>
      </form>
    </div>
  );
};

export default MessageInput;
