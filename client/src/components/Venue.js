import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import VenueList from './VenueList'
import NewVenueForm from './NewVenueForm'


const venueListContainer = styled.div`
display: flex;
background: black;
color: white;
`
const Links = styled.div`
a {
    font-size: 30px;
    text-decoration: none;
    font-family: 'Spectral SC', serif;
    color: #1a4b9b;
}
`

const AddButton = styled.div`
button {
    font-weight: bold;
    font-size:
    height: 75px;
    width: 125px;
    background-color: #eff4f9;
    margin: 0 0 75px 25px;
    border-radius: 3px;
}
button:hover {
    cursor: pointer;
}
align-self: center;
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
        this.setState({ newForm: !this.state.newForm })
    }

    render() {
        return (
            <div>
                <Links>
                    <VenueList venue={this.state.venue} />
                </Links>
                <AddButton>
                    <button onClick={this.toggleShowForm}>Add Venue</button>
                </AddButton>
                {this.state.newForm ? <NewVenueForm toggleShowForm={this.toggleShowForm} getAllVenues={this.getAllVenues} /> : null}
            </div>
        )
    }
}

export default Venue;