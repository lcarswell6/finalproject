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
border: 1px solid red;
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
                <Link to="/users"><img src={"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-128.png"}/></Link>
            </UserLink>
            <Title>
                Dressed Yet?
            </Title>
            <VenueLink>
                <Link to="/venues"><img src={"http://www.iconarchive.com/download/i97927/flat-icons.com/flat/Beer.ico"}/></Link>
            </VenueLink>
        </Container>
    );
};

export default NavBar;