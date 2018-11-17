import React from "react"

const Message = ({ message, messageRead, messageSelected, messageUnread }) => {
    return (
        <div className={message.read ? "row message read" : "row message unread"}>
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input type="checkbox" onClick={() => messageSelected(message.id)} checked={(typeof message.selected !== "undefined") && message.selected === true ? "checked" : ""} />
                    </div>
                    <div className="col-xs-2">
                        <i className="star fa fa-star-o"></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11" onClick={() => messageRead(message.id)} onClick={() => messageUnread(message.id)}>
                <a href="#">{message.subject}</a>
            </div>
        </div>
    )
}

export default Message