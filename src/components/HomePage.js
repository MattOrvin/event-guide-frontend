import React, { Component } from "react";
import EventList from "./EventList";
// import EventItem from './EventItem'
import Search from "./Search";
import UserShow from './UserShow'
import EventShow from './EventShow'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: [],
      searchTerm: ""
    };
  }

  showEvents = events => {
    this.setState({
      eventData: events
    });
  };

  handleChange = searchQuery => {
    console.log(searchQuery);
    fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${searchQuery.keyword}&location.address=${searchQuery.location}&categories=110&token=4VKKBMR6XULWQVBCNW3H`
    )
      .then(resp => resp.json())
      .then(newEventData => this.showEvents(newEventData.events));
  };

  saveFunction = eventData => {
    debugger;
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        eventbrite_id: eventData.id,
        eventbrite_venue_id: eventData.venue_id,
        name: eventData.name.text,
        user_id: this.props.currentUser.user.id
      })
    })
      .then(resp => resp.json())
      .then(saveData => console.log(saveData));
  };

  // Take the searchQuery object and use it to make a new GET fetch request, then update the state

  componentDidMount() {
    const token = localStorage.getItem("token");
    if(token){
        return fetch(`https://www.eventbriteapi.com/v3/events/search/?categories=110&token=4VKKBMR6XULWQVBCNW3H`)
            .then(resp => resp.json())
            .then(eventData => this.setState({ eventData: eventData.events }))
            .catch(error => console.log(error));
        }
    }

  render = () => {
    if(this.props.selectedUser){
        return (
            <div>
                <UserShow 
                    currentUser={this.props.currentUser}
                    selectedUser={this.props.selectedUser}/>
            </div>
        );
        } else {
            return(
                <div>
                    <h1>Welcome</h1>
                    <EventShow />
                    <Search handleChange={this.handleChange} />
                    {this.state.eventData.length ? (
                    <EventList
                        events={this.state.eventData}
                        saveFunction={this.saveFunction}
                    />
                    ) : (
                    "loading"
                    )}
                </div>
            )
        }
    }
}

export default HomePage;
