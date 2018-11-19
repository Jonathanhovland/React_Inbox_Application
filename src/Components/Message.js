import React from "react"

const Message = ({ id, read, selected, starred, subject, toggleStarred, toggleSelected, toggleRead }) => {
    const readClasses = read ? "row message read" : "row message unread"
    const selectedClass = selected ? " selected" : ""
    const starredClasses = starred ? "star fa fa-star" : "star fa fa-star-o"    
    return (
        <div className={ readClasses + selectedClass }>
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input type="checkbox" onClick={ () => toggleSelected(id) } defaultChecked={ (typeof selected !== "undefined") && selected === true ? "defaultChecked" : "" } />
                    </div>
                    <div className="col-xs-2">
                        <i className={ starredClasses } onClick={ () => toggleStarred(id) }></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11" onClick={ () => toggleRead(id) }>
            <a href="#">
                <div>
                    <p>{ subject }</p>
                </div>
            </a>
            </div>
        </div>
    )
}

export default Message