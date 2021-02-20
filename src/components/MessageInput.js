import React, { useState } from 'react';

const MessageInput = () => {
  const [ message, setMessage ] = useState('')

  const addMessage = (e) => {
    e.preventDefault();
    setMessage('')
  }

  return (
    <div className="App">
      <form onSubmit={(e) => addMessage(e)}>
        <input id="message-input" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message.."></input>
        <button>ADD MESSAGE</button>
      </form>
    </div>
  );
}

export default MessageInput;
