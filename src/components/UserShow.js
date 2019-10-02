import React, { Component } from 'react';
import EventItem from './EventItem';

class UserShow extends Component {
    constructor(){
        super()
        this.state = {
            userData: '',
            userEventData: []
        }
    }
    
    componentDidMount(){
        const token = localStorage.token
            fetch(`http://localhost:3000/users/${this.props.currentUser.user.id}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
        })
        .then(resp => resp.json())
        .then(data => this.setState({ userData: data }))
        fetch(`http://localhost:3000/users/${this.props.currentUser.user.id}/events`,{
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({ userEventData: data.events})
        })
    }

    displayEventItem = () => {
        return this.state.userEventData.map(event => <EventItem event={event}/>)
    }

    render(){
        let user = this.state.userData.user;
        // let userEvents = this.state.userEventData.map((event) => {
        //     return <EventItem key={event.id} event={event} />
        // })
        // let mappedUserEvents = userEvents.map((event) => {
            
        // })
        // console.log(userEvents)
        return(
            this.state.userData === "" ? 
            <div>Loading...</div> :
            <div>
                <p>{user.name}</p>
                {this.displayEventItem()}
            </div>
        )
    }
}

export default UserShow