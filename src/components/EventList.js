import React from 'react';
import EventItem from './EventItem'
// import { CardDeck } from 'react-bootstrap'

const EventList = (props) => {
    console.log(props)
    const mappedEvents = props.events.map((event => {
        return <EventItem key={event.id} event={event} />
    }))
    return(
    <li>
        {mappedEvents}
    </li>
    )
}



export default EventList