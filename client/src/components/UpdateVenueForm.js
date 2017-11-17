import React, { Component } from 'react';
import axios from 'axios'


class UpdateVenueForm extends Component {
    state = {
        name: '',
        address: '',
        dress_type:'',
        description:'',
        rating:''
    }

    handleChange = (event) => {
        const name = event.target.name 
        const newState = {...this.state}
        newState[name] = event.target.value
        this.setState(newState)   
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const id = this.props.userId
        const payload = {
            name: this.state.name,
            address: this.state.address,
            dress_type: this.state.dress_type,
            description: this.state.description,
            rating: this.state.rating
        }
        await axios.put(`/api/venue/${id}`, payload)
        await this.props.getCurrentVenue()
        await this.props.toggleNewForm()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input onChange={this.handleChange} type="text" name="address" value={this.state.address} />
            </div>
            <div>
                <label htmlFor="dress_type">Dress Type:</label>
                <input onChange={this.handleChange} type="text" name="dress_type" value={this.state.dress_type} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea onChange={this.handleChange} type="text" name="description" value={this.state.description} />
            </div>
            <div>
                <label htmlFor="rating"> Rating: </label>
                <input onChange={this.handleChange} type="integer" name="rating" value={this.state.rating}/>
            </div>
            <button>Submit</button>
            </form>
        );
    }
}

export default UpdateVenueForm;