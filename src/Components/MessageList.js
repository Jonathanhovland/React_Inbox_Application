import React from "react"
import Message from "./Message";

const MessageList = ({ messages, messageRead, messageSelected, messageUnread }) => {
    return (
        messages.map(message => {
            return <Message message={message} messageRead={messageRead} messageSelected={messageSelected} messageRead={messageRead} messageUnread={messageUnread}/>
        })
    )
}

export default MessageList