import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import UpdateUserForm from './UpdateUserForm'
import { Redirect } from 'react-router-dom'

const Content = styled.div`
border: 1px solid green;
margin-top:75px;
`
const UserInfo = styled.div`
display: flex;
flex-direction: right;
height: 250px;
width: 100%;
border: 1px solid yellow;
margin: 0 auto;
background-color: #f7f8f9;

img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: relative; 
}

`
const PostContainer = styled.div`
display: flex;
align-items: baseline;
border: 1px solid black;
`

const PicPostContainer = styled.div`
border: 1px solid blue;
`

const EditButton = styled.div`
button {
    font-weight: bold;
    height: 25px;
    width: 100px;
    background-color: #f7f8f9;
}
`

const NameDiv = styled.div`
font-size:25px;
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
            <Content>
                <UserInfo>
                    <img src={this.state.user.image_url} />
                    <NameDiv>
                        {this.state.user.name}
                    </NameDiv>
                    <EditButton>
                        <button onClick={this.toggleNewForm}>Edit Profile</button>
                    </EditButton>
                </UserInfo>
                <PostContainer>
                    i want the users recent posts here.
                    </PostContainer>
                <div>
                    Rating: {this.state.user.rating}
                </div>
                <br />
                <button onClick={this.deleteUser}>Delete User</button>
                {this.state.newForm ? <UpdateUserForm userId={this.props.match.params.id} toggleNewForm={this.toggleNewForm} getCurrentUser={this.getCurrentUser} /> : null}
            </Content>
        );
    }
}

export default UserPage;