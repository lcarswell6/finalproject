import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`

text-size: 30px;
justify-content: right;
text-align: center;
height: 50px;
width: 100%;
background: grey;
border: 10px;

`
const NavBar = () => {
    return (
        <Container>
            <div>
                <Link to="/users">Users</Link>
            </div>
            <div>
                <Link to="/venues">Venues</Link>
            </div>
        </Container>
    );
};

export default NavBar;