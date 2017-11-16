import React, { Component } from 'react';
import axios from 'axios'
import VenueList from './VenueList'
import styled from 'styled-components'

const venueListContainer = styled.div`
display: flex;
background: black;
color: white;
`
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