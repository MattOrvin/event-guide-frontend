import React, { Component } from 'react';
import CommentContainer from './CommentContainer'
import EventItem from './EventItem'

class EventShow extends Component {
    render(){
        return(
            <div>
                <EventItem event={this.props.showPage}/>
                <CommentContainer />
            </div>
        )
    }
}

export default EventShow