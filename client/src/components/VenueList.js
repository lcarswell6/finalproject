import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const venueContainer = styled.div`
display: flex;
background: grey;
color: purple;
`

const VenueList = (props) => {
    const getVenue =
        <div>
            <h1>All Venues</h1>
            {
                props.venue.map((venue) => {
                    return (
                        <div>
                            <Link to={`/venues/${venue.id}`}>{venue.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    return (
        <div>
            {getVenue}
        </div>
    )
}
export default VenueList;