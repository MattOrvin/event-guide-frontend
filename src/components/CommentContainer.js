import React, { Component } from 'react';
import CommentItem from './CommentItem'

class CommentContainer extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //     noteData: []
    //     }
    // }

    // We're going to fetch from localhost for the comments that belong to an event
    // and those will be used to set the initial state
    // When a user posts a comment it saves it in the form's (text area's) state and 
    // updates it 

    render(){
        return(
            <div>
                <h3>Comment Container</h3>
                <CommentItem />
            </div>
        )
    }
}

export default CommentContainer