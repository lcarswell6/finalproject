import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const UserList = (props) => {
    const showAllUsers =
        <div>
            <h1>All Users</h1>
            {
                props.user.map((use) => {
                    return (
                        <div>
                            <Link to={`/users/${use.id}`}>{use.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    return (
        <div>
            {showAllUsers}
        </div>
    )
}
export default UserList;