import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";

const Messagelist = () => {
  const messages = useSelector((state) => state.messageReducer);
  const renderedMessages = messages.map((message) => {
    return <Message key={message.id} message={message} />;
  });

  return <div className="message-list-wrapper">{renderedMessages}</div>;
};

export default Messagelist;
