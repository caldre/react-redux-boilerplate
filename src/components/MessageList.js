import React from "react";
import { useSelector } from "react-redux";

const Messagelist = () => {
  const messages = useSelector((state) => state.messageReducer);
  const rendermessages = messages.map((message) => {
    return (
      <div key={message.id}>
        <div>{message.text}</div>
        <br />
      </div>
    );
  });

  return <div>{rendermessages}</div>;
};

export default Messagelist;
