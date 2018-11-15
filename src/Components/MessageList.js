import React from "react"
import Message from "./Message";

const MessageList = ({ messages, messageRead, messageSelected }) => {
    return (
        messages.map(message => {
            return <Message message={message} messageRead={messageRead} messageSelected={messageSelected}/>
        })
    )
}

export default MessageList