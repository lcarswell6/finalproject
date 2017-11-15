import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const UserList = (props) => {
    const forFun =
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
            {forFun}
        </div>
    )
}
export default UserList;