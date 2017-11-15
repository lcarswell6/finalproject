import React, { Component } from 'react'
import axios from 'axios'
import UserList from './UserList'

class User extends Component {
    state = {
        user: [],
        posts: []
        
    }

    componentWillMount() {
        this.getAllUsers()
    }
    getAllUsers = async () => {
        const response = await axios.get(`/api/users`)
        console.log(response.data)
        this.setState({ user: response.data })
    }
    // try {
    //     const { userId } = this.props.match.params.userId
    //     const response = await axios.get(`/api/users/${userId}/posts`)
    //     console.log(response)
    //     this.setState({ posts: response.data })
    // }
    // catch (error) {
    //     console.log(error)
    // }
    render() {
        return (
            <div>

                <UserList user={this.state.user}/>
                {/* <h1>{this.state.user.name}</h1>
                <div>
                    <img src={this.state.user.image_url} alt='user picture' />
                </div> */}
            </div>
        );
    }
}


export default User;