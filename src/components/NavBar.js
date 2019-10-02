import React, { Component } from 'react';

class NavBar extends Component {
    render(){
    return(
        <div>
            <h1>NavBar here</h1>
            <button onClick={this.props.handleLogoutClick}>Log Out</button>
            <button onClick={this.props.handleHomeClick}> Home </button>
            <button onClick={this.props.chooseUser}> Your Profile </button>
        </div>
    )
    }
}

export default NavBar