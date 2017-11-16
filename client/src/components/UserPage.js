import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import UpdateUserForm from './UpdateUserForm'
import { Redirect } from 'react-router-dom'


const Pic = styled.div`
display: flex;
border: 1px solid black;
box-shadow: 
border-radius: 10px;

`

class UserPage extends Component {
    state = {
        user: {},
        posts: [],
        newForm: false,
        redirect: false
    }

    componentWillMount() {
        this.getCurrentUser()
    }

    getCurrentUser = async () => {
        const id = this.props.match.params.id
        const res = await axios.get(`/api/users/${id}`)
        console.log(res.data)
        this.setState({ user: res.data.user, posts: res.data.posts })
    }

    toggleNewForm = () => {
        this.setState({ newForm: !this.state.newForm })
    }

    deleteUser = async () => {
        const id = this.props.match.params.id
        const res = await axios.delete(`/api/users/${id}`)
        this.setState({redirect: true})

}




    render() {
        if (this.state.redirect) {
            return <Redirect to={`/users`} />
        }
        return (
            <div>
                {this.state.user.name}
                <div>
                    Rating: {this.state.user.rating}
                </div>
                <Pic>
                    <img src={this.state.user.image_url} />
                </Pic>
                <button onClick={this.toggleNewForm}>Edit User</button>
                <br />
                <button onClick={this.deleteUser}>Delete User</button>
                {this.state.newForm ? <UpdateUserForm userId={this.props.match.params.id} toggleNewForm={this.toggleNewForm} getCurrentUser={this.getCurrentUser} /> : null}
            </div>
        );
    }
}

export default UserPage;