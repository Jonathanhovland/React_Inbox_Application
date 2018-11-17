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

  markAsRead = () => {
    console.log("markAsRead");
    const selectedMessages = this.state.messages.filter(message => message.selected === true)
    console.log("selectedMessages", selectedMessages)
    selectedMessages.forEach(message => this.messageRead(message.id))
  }

  markUnread = () => {
    console.log("markUnread");
    const selectedMessages = this.state.messages.filter(message => message.selected === true)
    console.log("selectedMessages", selectedMessages)
    selectedMessages.forEach(message => this.messageUnread(message.id))
  }

  messageSelected = (id) => {
    console.log("balllsssss", id)
    
    const updateMessages = this.state.messages.map(message => {
      if (message.id === id) {
        message.selected = !message.selected
      }
      return message
    })
      this.setState({ messages: updateMessages })
  }

  messageRead = async (id) => {
    
    await fetch("http://localhost:8082/api/messages", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        messageIds: [id],
        command: "read",
        "read": true
      })
    })

    const updateMessages = this.state.messages.map(message => {
      if (message.id === id) {
        message.read = true
      }
      return message
    })
      this.setState({ messages: updateMessages })
  }

  messageUnread = async (id) => {
    
    await fetch("http://localhost:8082/api/messages", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        messageIds: [id],
        command: "read",
        "read": false
      })
    })

    const updateMessages = this.state.messages.map(message => {
      if (message.id === id) {
        message.read = false
      }
      return message
    })
      this.setState({ messages: updateMessages })
  }

  render() {
    return (
      <div classNameName="App">
        <Toolbar markAsRead={this.markAsRead}
                 markUnread={this.markUnread}/>
        <MessageList messages={this.state.messages} 
                     messageRead={this.messageRead}
                     messageUnread={this.messageUnread} 
                     messageSelected={this.messageSelected}/>
      </div>
    );
  }
}

export default App
