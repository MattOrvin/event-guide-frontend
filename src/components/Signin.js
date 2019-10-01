import React, { Component } from 'react';

class Signin extends Component {
    constructor(){
        super()
        this.state={
            username: '',
            password: ''
        }
    }

    handleSigninChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.userLoginFetch(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Log in to your account</h1>
                <label>Username</label>
                <input
                    type="text"
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleSigninChange}
                /><br/>

                <label>Password</label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleSigninChange}
                    /><br/>
                <input 
                    type="submit" 
                    value="Submit"
                />
            </form>
        )
    }
}

export default Signin