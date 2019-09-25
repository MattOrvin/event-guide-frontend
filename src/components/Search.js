import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super()
        this.state = {
            keyword: '',
            date: '',
            location: ''
        }
    }

    updateEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault()
        this.props.handleChange(this.state)
    }

    render(){
    return(
        <form onSubmit={this.submitForm}>
            <label>
                Keyword(s):
            </label>
            <input name="keyword" type="text" value={this.state.keyword} onChange={this.updateEvent} />
            <br />
            <label>
                Location:
            </label>
            <input name="location" type="text" value={this.state.location} onChange={this.updateEvent}/>
            <br />
            <input type="submit" value="Submit" />
        </form>
        )
    }
}


export default Search;