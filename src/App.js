import React, { Component } from 'react'
import './App.css'
import Toolbar from './Components/Toolbar'
import MessageList from './Components/MessageList'
import NewMessage from './Components/NewMessage';

class App extends Component {

  state = {
    messages: [],
    composeForm: false,
    composeMessageForm: {
      subject: "",
      body: ""
    }
  }

  async componentDidMount() {
    this.theMessages()
  }

  async theMessages() {
    const response = await fetch("http://localhost:8082/api/messages")
    const message = await response.json()
    this.setState({ messages: message })
  }

  markAsRead = () => {
    const selectedMessages = this.state.messages.filter(message => message.selected === true)
    selectedMessages.forEach(message => this.toggleRead(message.id))
  }

  markUnread = () => {
    const selectedMessages = this.state.messages.filter(message => message.selected === true)
    selectedMessages.forEach(message => this.messageUnread(message.id))
  }

  toggleSelected = (id) => {    
    const updateMessages = this.state.messages.map(message => {
      if (message.id === id) {
        message.selected = !message.selected
      }
      return message
    })
      this.setState({ messages: updateMessages })
  }

  toggleRead = async (id) => {
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
        "read": true
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

  toggleStarred = async (Id) => {
    await fetch("http://localhost:8082/api/messages", {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        messageIds: [Id],
        command: "star"
      })
    })
    .then(response => response.json())
    .then(newMessages => {
      this.setState({
        messages: newMessages
      })
    })
  }

  composeHandler = () => {
    let newComposeForm = this.state.composeForm
    newComposeForm = !newComposeForm

    this.setState({
      // ...this.state,
      composeForm: newComposeForm,
      composeMessageForm: {
        subject: "",
        body: ""
      }
    })
  }

  composeMessageSubject = (e) => {
    const newSubject = e.target.value
    this.setState({
      composeMessageForm: { ...this.state.composeMessageForm, subject: newSubject }
    })
  }

  composeMessageBody = (e) => {
    const newBody = e.target.value
    this.setState({
      composeMessageForm: { ...this.state.composeMessageForm, body: newBody}
    })
  }

  sendMessage = async (e) => {
    e.preventDefault()
    const newMessage = this.state.composeMessageForm
    if (!newMessage.subject || !newMessage.body) {
      return
    }

    await fetch("http://localhost:8082/api/messages", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    this.setState({
      composeForm: true,
      composeFormMessage: {
        subject: "",
        body: ""
      }
    })
    this.theMessages()
  };

  render() {
    return (
      <div className="App">
        <Toolbar markAsRead={this.markAsRead}
                 markUnread={this.markUnread}
                 composeHandler={this.composeHandler}/>
        <NewMessage composeForm={this.state.composeForm}
                    composeMessageSubject={this.composeMessageSubject}
                    composeMessageBody={this.composeMessageBody}
                    sendMessage={this.sendMessage}/>
        <MessageList messages={this.state.messages} 
                     toggleRead={this.toggleRead}
                     toggleSelected={this.toggleSelected}
                     toggleStarred={this.toggleStarred}/>
      </div>
    );
  }
}

export default App
