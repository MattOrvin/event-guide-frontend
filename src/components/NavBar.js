import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
    render(){
    return(
        <Menu color='green'>
            <Menu.Item 
                name='Profile'
                onClick={this.props.chooseUser}
            />
            
            <Menu.Item 
                name='Home'
                onClick={this.props.handleHomeClick}
            />
            <Menu.Item
                name='Log Out'
                onClick={this.props.handleLogoutClick}
            />
        </Menu>
        )
    }
}

export default NavBar