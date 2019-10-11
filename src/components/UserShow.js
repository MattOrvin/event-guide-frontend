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
        return(
            this.state.userData === "" ? 
            <div>Loading...</div> :
            <div>
                <h1>{user.name}</h1>
                <h3>Saved Events:</h3>
                <br></br>
                {this.displayEventItem()}
            </div>
        )
    }
}

export default UserShow