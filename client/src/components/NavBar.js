import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
align-items: center;
display: flex;
/* flex-direction: column; */
flex-flow: row wrap;
justify-content: space-evenly;
overflow: hidden;
position: fixed;
top: 0;
height: 75px;
width: 100%;
background-image: linear-gradient(grey, lightgrey, white);
`
const UserLink = styled.div`
justify-content: right;
align-items: right;
img {
    max-height:50px;
    max-width:50px
}
`
const Title = styled.div`
font-family: 'Spectral SC', serif;
font-size: 30px;
align-items: center;
`


const VenueLink = styled.div`
img {
    max-height: 50px;
    max-width: 50px;
}
`

const NavBar = () => {
    return (
        <Container>
            <UserLink>
                <Link to="/users"><img src={"http://downloadicons.net/sites/default/files/male-user-icon-67659.png"}/></Link>
            </UserLink>
            <Title>
                Dressed Yet?
            </Title>
            <VenueLink>
                <Link to="/venues"><img src={"https://cdn2.iconfinder.com/data/icons/leisure-entertainment-minimalist-icon-set/100/cheers-01-512.png"}/></Link>
            </VenueLink>
        </Container>
    );
};

export default NavBar;