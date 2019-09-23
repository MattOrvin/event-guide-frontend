import React, { Component } from 'react';
import EventList from './EventList'
// import EventItem from './EventItem'
import Search from './Search'

// First, let's get stuff to display on this page
// We'll need to iterate over the objects that our API returns and make individual components 
// out of them, which we'll render and set as the state
// Before using the API, try using some dummy data 


class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            eventData: [],
            searchTerm: ''
        }
    }

    showEvents = (events) => {
        this.setState({
            eventData: events
        })
    }

    handleChange = (searchQuery) => {
        console.log(searchQuery)
        this.setState({
            searchTerm: searchQuery
        })
        // Take the searchQuery object and use it to make a new GET fetch request, then update the state
    }

    showSearchResults(){
        fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${this.state.searchTerm}categories=110&token=4VKKBMR6XULWQVBCNW3H`)
            .then(resp => resp.json())
            .then(eventData => console.log(eventData))
    }
    
    componentDidMount(){
        fetch(`https://www.eventbriteapi.com/v3/events/search/?categories=110&token=4VKKBMR6XULWQVBCNW3H`)
            .then(resp => resp.json())
            .then(eventData => this.setState({eventData: eventData.events}))
            .then(error => console.log(error))
    }

    render(){
        return(
        <div>
            <h1>Hello there</h1>
            <Search handleChange={this.handleChange}/>
            {this.state.eventData.length > 0 ? <EventList events={this.state.eventData}/> : "loading"}
        </div>
        )
    }
}

export default HomePage