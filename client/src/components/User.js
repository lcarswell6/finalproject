import React, { Component } from 'react';
import axios from 'axios';
import UserList from './UserList';

class User extends Component {

    state = {
        user: {},
        posts: []

    }

    async componentWillMount() {
        try {
            const { userId } = this.props.match.params
            const response = await axios.get(`/api/users/${userId}`)

            this.setState({ user: reponse.data })
        }
        catch (error) {
            console.log(error)
        }
        try {
            const userId = this.props.match.params.userId
            const response = await axios.get(`/api/users/${userId}/posts`)
            console.log(response)
            this.setState({ posts: response.data })
        }
        catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.user.name}</h1>
                <div>
                    <img src={this.state.user.image_url} alt='user picture' />
                </div>
            </div>
        );
    }
}


export default User;