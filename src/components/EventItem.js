import React from 'react';



const EventItem = (props) => {
    return(
        props.event.currency 
    ? 
        <div className="card w-25">
            <h3 onClick={(e) => props.handleShowClick(props.event)}><a href="#">{props.event.name.text}</a></h3>
            <p>{props.event.start.local}</p>
            <button onClick={(e) => props.saveFunction(props.event)}>Save</button>
        </div>
    :
       <div>
            <h3>{props.event.name}</h3>
            <p>{props.event.start}</p>
            <p>{props.event.end}</p>
            <img max-width="600px" max-height="600px" src={props.event.logo}/>
            <p>{props.event.summary}</p>
        </div>
    )
}



export default EventItem