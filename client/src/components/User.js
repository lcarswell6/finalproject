import React, { Component } from 'react'
import axios from 'axios'
import UserList from './UserList'
import NewUserForm from './NewUserForm'

class User extends Component {
    state = {
        user: [],
        posts: [],
        newForm: false
        }

    componentWillMount() {
        this.getAllUsers()
    }
    getAllUsers = async () => {
        const response = await axios.get(`/api/users`)
        console.log(response.data)
        this.setState({ user: response.data })
    }

    toggleShowForm = () => {
        this.setState({newForm: !this.state.newForm})
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
                <button onClick={this.toggleShowForm}>Create New User</button>

                {this.state.newForm ? <NewUserForm toggleShowForm={this.toggleShowForm} getAllUsers={this.getAllUsers}/> : null}
                {/* <h1>{this.state.user.name}</h1>
                <div>
                    <img src={this.state.user.image_url} alt='user picture' />
                </div> */}
            </div>
        );
    }
}


export default User;