import React from "react";
import Message from "./Message";

const Messagelist = (props) => {
  const messages = props.messages.map((message) => {
    return <Message message={message} button="DELETE" />;
  });

  return (
    <div>
      <Message message={{ message: "" }} button="ADD" />
      <div className="message-list">{messages}</div>
    </div>
  );
};

export default Messagelist;
