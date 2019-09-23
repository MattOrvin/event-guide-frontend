import React from 'react';

const EventItem = (props) => (
    <li className="card w-25">
        {/* <img src={props.event.logo.url}></img> */}
        <h3>{props.event.name.text}</h3>
        <p>{props.event.start.local}</p>
        <button>Save</button>
    </li>
);


export default EventItem