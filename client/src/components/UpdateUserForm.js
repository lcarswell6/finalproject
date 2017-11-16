import React, { Component } from 'react';
import axios from 'axios'


class UpdateUserForm extends Component {
    state = {
        name: '',
        image_url:'',
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
            image_url: this.state.image_url,
            rating: this.state.rating
        }
        await axios.put(`/api/users/${id}`, payload)
        await this.props.getCurrentUser()
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
                <label htmlFor="image_url">Image URL:</label>
                <input onChange={this.handleChange} type="text" name="image_url" value={this.state.image_url} />
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

export default UpdateUserForm;