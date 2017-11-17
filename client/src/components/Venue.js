import React, { Component } from 'react';
import axios from 'axios'
import VenueList from './VenueList'
import styled from 'styled-components'
import NewVenueForm from './NewVenueForm'


const venueListContainer = styled.div`
display: flex;
background: black;
color: white;
`
class Venue extends Component {
    state = {
        venue: [],
        posts: [],
        newForm: false
    }
    componentWillMount() {
        this.getAllVenues()
    }
    getAllVenues = async () => {
        const response = await axios.get(`/api/venues`)
        console.log(response.data)
        this.setState({ venue: response.data })
    }

    toggleShowForm = () => {
        this.setState({newForm: !this.state.newForm})
    }

    render() {
        return (
            <div>
                <VenueList venue={this.state.venue} />
                <button onClick={this.toggleShowForm}>Add Venue</button>
                {this.state.newForm ? <NewVenueForm toggleShowForm={this.toggleShowForm} getAllVenues={this.getAllVenues}/> : null}
            </div>
        )
    }
}

export default Venue;