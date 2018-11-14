import React, { Component } from 'react';
import './App.css';
import Toolbar from './Components/Toolbar';
import MessageList from './Components/MessageList';

class App extends Component {

  state = {
    messages: [1, 2, 3]
  }

  render() {
    return (
      <div classNameName="App">
        <Toolbar />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
