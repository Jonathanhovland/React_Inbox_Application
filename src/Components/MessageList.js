import React from "react"
import Message from "./Message";

const MessageList = ({ messages, messageRead }) => {
    return (
        messages.map(message => {
            return <Message message={message} messageRead={messageRead}/>
        })
    )
}

export default MessageList