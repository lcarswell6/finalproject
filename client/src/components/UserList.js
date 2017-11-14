import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserList extends Component {
    state = {
        error: '',
        users: []
    }

    componentWillMount() {
        getUsers();
    }

    getUsers = async () => {
        try {
            const res = await axios.get('/api/users');
            await setState({ users: user.data });
            return res.data;
        }
        catch (err) {
            console.log(err)
            await setState({ error: err.message })
            return err.message
        }
    }

    render() {
        if (state.error) {
            return <div>{state.error}</div>
        }
        return (
            <div>
                <h1>All Users</h1>
                {state.users.map(user => (
                    <div key={user.id}>
                        <Link to={`/users/${user.id}`}>user.name</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default UserList;