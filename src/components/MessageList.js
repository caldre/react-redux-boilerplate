import React from "react";
<<<<<<< HEAD
import { useSelector } from "react-redux";

const Messagelist = () => {
  const messages = useSelector((state) => state.messageReducer);
  const rendermessages = messages.map((message) => {
    return (
      <div>
        <div>{message}</div>
        <br />
      </div>
    );
  });

  return <div>{rendermessages}</div>;
=======
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
>>>>>>> 43c0184b70108245571e87ef1d225c9441549044
};

export default Messagelist;
