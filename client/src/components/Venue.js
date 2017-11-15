import React, { Component } from 'react';
import axios from 'axios'
import VenueList from './VenueList'

class Venue extends Component {
    state = {
        venue: [], 
        posts: []
    }
    componentWillMount() {
        this.getAllVenues()
    }
    getAllVenues = async () => {
        const response = await axios.get(`/api/venues`)
        console.log(response.data)
        this.setState({ venue: response.data })
    }

    render() {
        return (
            <div>
                <VenueList venue={this.state.venue} />
            </div>
        )
    }
}

export default Venue;