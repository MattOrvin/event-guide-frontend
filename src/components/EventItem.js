import React from 'react';
import { Button } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

const EventItem = (props) => {
    return(
        props.event.currency 
    ? 
        <Container>
            <h3 onClick={(e) => props.handleShowClick(props.event)}><a href="#">{props.event.name.text}</a></h3>
            <p>{props.event.start.local}</p>
            <Button className="ui button" onClick={(e) => props.saveFunction(props.event)}>Save</Button>
        </Container>
    :
       <Container>
            <h3>{props.event.name}</h3>
            <p>{props.event.start}</p>
            <p>{props.event.end}</p>
            <img max-width="600px" max-height="600px" src={props.event.logo}/>
            <p>{props.event.summary}</p>
        </Container>
    )
}



export default EventItem