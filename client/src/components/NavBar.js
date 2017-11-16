import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to="/users">Users</Link>
            <Link to="/venues">Venues</Link>
        </div>
    );
};

export default NavBar;