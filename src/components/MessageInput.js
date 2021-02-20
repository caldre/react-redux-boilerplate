import React from 'react';

const MessageInput = () => {
  return (
    <div className="App">
      <form>
        <input id="message-input" name="message" placeholder="Enter message.."></input>
        <button>ADD MESSAGE</button>
      </form>
    </div>
  );
}

export default MessageInput;
