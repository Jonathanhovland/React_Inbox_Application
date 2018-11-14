import React from "react"
import Message from "./Message";

const MessageList = ({messages}) => {
    return (
        messages.map(message => {
            return <Message />
        })
    )
}

export default MessageList