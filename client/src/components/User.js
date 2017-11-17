import React, { Component } from 'react'
import axios from 'axios'
import UserList from './UserList'
import NewUserForm from './NewUserForm'
import styled from 'styled-components'


const Content = styled.div`
background-color: #eff4f9;
height: 100vh;
`

const CreateButton = styled.div`
button {
    font-weight: bold;
    font-size:
    height: 75px;
    width: 125px;
    background-color: #eff4f9;
    margin: 0 0 75px 25px;
    border-radius: 3px;
}
button:hover {
    cursor:pointer;
}
align-self:center;
`

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
            <Content>

                <UserList user={this.state.user}/>
                
                <CreateButton>
                <button onClick={this.toggleShowForm}>Create New User</button>
                </CreateButton>

                {this.state.newForm ? <NewUserForm toggleShowForm={this.toggleShowForm} getAllUsers={this.getAllUsers}/> : null}
                {/* <h1>{this.state.user.name}</h1>
                <div>
                    <img src={this.state.user.image_url} alt='user picture' />
                </div> */}
            </Content>
        );
    }
}


export default User;