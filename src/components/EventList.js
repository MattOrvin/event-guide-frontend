import React from 'react';
import EventItem from './EventItem'

const EventList = (props) => {
    console.log(props)
    const mappedEvents = props.events.map((event => {
        return <EventItem key={event.id} event={event} saveFunction={props.saveFunction} />
    }))
    return(
    <ul>
        {mappedEvents}
    </ul>
    )
}



export default EventList