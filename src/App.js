import React from 'react';
import MessageInput from './components/MessageInput'
import MessageList from './components/MessageList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MessageInput />
      <MessageList />
    </div>
  );
}

export default App;
