import React, { Component } from 'react';

class UserShow extends Component {
    constructor(){
        super()
        this.state = {
            userData: '',
            userEventData: ''
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
        .then(data => this.setState({ userEventData: data}))
    }

    render(){
        let user = this.state.userData.user;
        console.log(this.state.userEventData.events)
        // console.log(this.state.userData.user.events)
        return(
            this.state.userData === "" ? 
            <div>Loading...</div> :
            <div>
                <p>{user.name}</p>
                <p>User's event items</p>
            </div>
        )
    }
}

export default UserShow