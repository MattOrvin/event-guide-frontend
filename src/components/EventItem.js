import React from 'react';
import { Button } from 'semantic-ui-react'
import { Card, Image, Grid } from 'semantic-ui-react'

const EventItem = (props) => {
    return(
        props.event.currency 
    ? 
    <Grid columns={4} divided>
      <Grid.Column>
        <Card>
            <h3 onClick={(e) => props.handleShowClick(props.event)}><a href="#">{props.event.name.text}</a></h3>
            <p>{props.event.start.local}</p>
            <Button className="ui button" onClick={(e) => props.saveFunction(props.event)}>Save</Button>
        </Card>
      </Grid.Column>
    </Grid>
    :
    <Grid columns={4} divided>
      <Grid.Column>
       <Card>
            <h3>{props.event.name}</h3>
            <p>{props.event.start}</p>
            <p>{props.event.end}</p>
            <Image src={props.event.logo} size='medium' />
            <p>{props.event.summary}</p>
        </Card>
      </Grid.Column>
    </Grid>
    )
}



export default EventItem