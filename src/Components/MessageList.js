import React from "react"
import Message from "./Message";

const MessageList = ({ messages, toggleRead, toggleSelected, toggleStarred }) => {

        return(
            <div>
                {messages.map((message, i) => {
                    return(      
                        <Message 
                        key={i}
                        id={message.id}
                        labels={message.labels}
                        read={message.read}
                        selected={message.selected}
                        starred={message.starred} 
                        subject={message.subject}
                        body={message.body}
                        toggleStarred={toggleStarred}
                        toggleSelected={toggleSelected}
                        toggleRead={toggleRead}
                        />
                        )}) 
                    }       
            </div>
    )
}

export default MessageList