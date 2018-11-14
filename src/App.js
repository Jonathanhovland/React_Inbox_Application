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

  messageRead = (id) => {
    console.log("messageRead", id)
    const updateMessages = this.state.messages.map(message => {
      if (message.id === id) {
        message.read = !message.read
      }
      return message
    })
    this.setState({ messages: updateMessages })
  }

  render() {
    return (
      <div classNameName="App">
        <Toolbar />
        <MessageList messages={this.state.messages} messageRead={this.messageRead}/>
      </div>
    );
  }
}

export default App
