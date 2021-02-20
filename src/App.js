import React from 'react';
import MessageInput from './components/MessageInput'
import MessageList from './components/MessageList';
import './App.css';

const messages = ["kakka", "ruusu on paskaa", "miksi käärmeitä", "vasemmiston juonia, kaljaa"]

const App = () => {
  return (
    <div className="App">
      <MessageInput />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
