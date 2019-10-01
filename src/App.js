import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import Signup from './components/Signup'
import Signin from './components/Signin'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    loggedIn: false,
    currentUser: ''
  }
}

componentDidMount(){
  // make a call to /current_user with the token as a header
  // that endpoint will send back the user if it's a valid token
  // when it comes back you'll update the this.state.currentUser with the user that came back
  const token = localStorage.token
  if(token){
    fetch(`http://localhost:3000/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
      })
      .then(resp => resp.json())
      .then(userData => {
        if (userData.message) {
          console.log(userData.message)
        } else {
          this.setState({loggedIn: true, currentUser: userData})
        }
    })
  }
}

userPostFetch = (userData) => {
  const token = localStorage.token;
  fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        user: {
          name: userData.username,
          password: userData.password
        }
      }),
  })
  .then(resp => resp.json())
  .then(newUser => {
    if (newUser.message) {
      // we want to display the error message here on the page
    } else {
      localStorage.setItem("token", newUser.jwt)
      this.setState({loggedIn: true, currentUser: newUser})
      console.log(newUser)
      }
    }
  )
}

userLoginFetch = (userData) => {
  const token = localStorage.token;
  fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        user: {
          name: userData.username,
          password: userData.password
        }
      }),
  })
  .then(resp => resp.json())
  .then(returningUser => {
    if (returningUser.message) {
      // we want to display the error message here on the page
    } else {
      localStorage.setItem("token", returningUser.jwt)
      this.setState({loggedIn: true, currentUser: returningUser})
      console.log(returningUser)
      }
    }
  )
}

getProfileFetch = () => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
           Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            this.setState({loggedIn: true, currentUser: data.user})
            console.log(data.user)
          }
        })
    }
    else{
      console.log("did not persist")
    }
}

  handleLogoutClick = (event) => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.setState({
      loggedIn: false,
      currentUser: ''
    })
  }

    render(){
    return (
      <div className="App">
        <Signup userPostFetch={this.userPostFetch}/>
        <Signin userLoginFetch={this.userLoginFetch}/>
        <HomePage 
          currentUser={this.currentUser} 
          loggedIn={this.loggedIn} 
          handleLogoutClick={this.handleLogoutClick}
          currentUser={this.state.currentUser}
          userLoginFetch={this.state.userLoginFetch}/>
      </div>
    )};
}

export default App;
