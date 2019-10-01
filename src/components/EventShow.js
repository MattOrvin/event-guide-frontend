import React, { Component } from 'react';
import CommentContainer from './CommentContainer'

class EventShow extends Component {
    render(){
        return(
            <div>
                <h3>event show page here</h3>
                <p>event info here (name, date, location, price, description)</p>
                <CommentContainer />
            </div>
        )
    }
}

export default EventShow