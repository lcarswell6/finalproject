import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: flex-end;
height: 50px;
width: 100%;
background-image: linear-gradient(grey, white);
border: 1px solid red;
`
const UserLink = styled.div`
justify-content: right;
align-items: right;
border:1px solid black;
`
const VenueLink = styled.div`
border: 1px solid green;
`

const NavBar = () => {
    return (
        <Container>
            <UserLink>
                <Link to="/users">Users</Link>
            </UserLink>
            <VenueLink>
                <Link to="/venues">Venues</Link>
            </VenueLink>
        </Container>
    );
};

export default NavBar;