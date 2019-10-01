import React, { Component } from 'react';

class NavBar extends Component {
    render(){
    return(
        <div>
            <h1>NavBar here</h1>
            <button onClick={this.props.handleLogoutClick}>Log Out</button>
            <button> Home button placeholder </button>
            <button> Profile button placeholder </button>
        </div>
    )
    }
}

export default NavBar