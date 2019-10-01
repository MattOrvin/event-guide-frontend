import React, { Component } from 'react';

// userInfoFetch = () => {
//     fetch(`http://localhost:3000/users/1`)
//         .then(resp => resp.json())
//         .then(data => console.log(data))
// }
// ^hard coded user here for testing purposes

class UserShow extends Component {
    render(){
        return(
            <div>
                <h3>user show page here</h3>
                <p>User name</p>
                <p>User's event items</p>
            </div>
        )
    }
}

export default UserShow