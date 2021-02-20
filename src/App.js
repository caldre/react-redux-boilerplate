import React from "react";
import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";
import "./App.css";

const messages = [
  "kakka",
  "ruusu on paskaa",
  "miksi käärmeitä",
  "vasemmiston juonia, kaljaa",
];

const App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
      <MessageInput />
      <MessageList />
=======
      {/* <MessageInput /> */}
      <MessageList messages={messages} />
>>>>>>> 43c0184b70108245571e87ef1d225c9441549044
    </div>
  );
};

export default App;
