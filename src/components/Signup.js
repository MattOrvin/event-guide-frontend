import React, { Component } from 'react';

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
    }
}

    handleSignupChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.userPostFetch(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Sign up for an account</h1>
                <label>Username</label>
                <input
                    type="text"
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleSignupChange}
                /><br/>

                <label>Password</label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleSignupChange}
                    /><br/>
                <input 
                    type="submit" 
                    value="Submit"
                />
            </form>
        )
    }
}

export default Signup