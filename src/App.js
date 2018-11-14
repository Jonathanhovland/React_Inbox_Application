import React, { Component } from 'react'
import './App.css'
import Toolbar from './Components/Toolbar'
import MessageList from './Components/MessageList'

class App extends Component {

  state = {
    messages: []
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8082/api/messages")
    const message = await response.json()
    this.setState({ messages: message })
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

export default App
