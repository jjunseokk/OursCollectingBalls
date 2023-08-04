import React from "react";


const EventCard = (props) => {
    return (
        <div className="event_card">
            <div className="event_text">
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}


export default EventCard;