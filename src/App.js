import React, { Component } from 'react';
import './App.css';
import Toolbar from './Components/Toolbar';
import MessageList from './Components/MessageList';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <Toolbar />
        <MessageList />
      </div>
    );
  }
}

export default App;
