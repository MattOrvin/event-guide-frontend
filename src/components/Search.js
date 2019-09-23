import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';


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
            [event.target.id]: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault()
        this.props.handleChange(this.state)
    }

    render(){
    return(
        <div className="filter">
            <form onSubmit={this.submitForm}>
                <FormGroup controlId="keyword">
                <FormControl onChange={this.updateEvent}
                    type="text"
                    placeholder="Search by Keywords"
                />
                </FormGroup>
                <br></br>
                <FormGroup controlId="date">
                <FormControl onChange={this.updateEvent}
                    type="text"
                    placeholder="Search by Date"
                />
                </FormGroup>
                <br></br>
                <FormGroup controlId="location">
                <FormControl onChange={this.updateEvent}
                    type="text"
                    placeholder="Search by Location"
                />
                </FormGroup>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
    }
}


export default Search;