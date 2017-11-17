import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import UpdateUserForm from './UpdateUserForm'
import { Redirect } from 'react-router-dom'


const Pic = styled.div`
display: flex;
flex-direction: right;
border: 1px solid black;
box-shadow: ;
width: relative;
max-width: 300px;
img {
    max-width:300px;
    max-height: 300px;
}

`
const PostContainer = styled.div`
display: flex;
align-items: baseline;
border: 1px solid black;
`

const PicPostContainer = styled.div`
display:flex;
flex-direction: right

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
        this.setState({ redirect: true })

    }




    render() {
        if (this.state.redirect) {
            return <Redirect to={`/users`} />
        }
        return (
            <div>
                {this.state.user.name}
                <PicPostContainer>

                <Pic>
                    <img src={this.state.user.image_url} />
                </Pic>
                <PostContainer>
                    i want the users recent posts here.
                </PostContainer>
                </PicPostContainer>
                <div>
                    Rating: {this.state.user.rating}
                </div>
                <button onClick={this.toggleNewForm}>Edit User</button>
                <br />
                <button onClick={this.deleteUser}>Delete User</button>
                {this.state.newForm ? <UpdateUserForm userId={this.props.match.params.id} toggleNewForm={this.toggleNewForm} getCurrentUser={this.getCurrentUser} /> : null}
            </div>
        );
    }
}

export default UserPage;