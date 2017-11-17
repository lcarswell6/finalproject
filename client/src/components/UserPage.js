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
height: 250px;
width: 100%;
border: 1px solid yellow;
margin: 0 0 0 50px;
background-color: #f7f8f9;

img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    display: flex;
    align-self: center;

}
`
const UserFunc = styled.div`
display: flex;
align-items: flex-start;
align-content: center;

`

const EditButton = styled.div`
button {
    font-weight: bold;
    font-size:
    height: 40px;
    width: 100px;
    background-color: #f7f8f9;
}
align-self:center;
`
const NameDiv = styled.div`
align-self: center;

`

const PostContainer = styled.div`
display: flex;
align-items: baseline;
border: 1px solid black;
`

const PicPostContainer = styled.div`
border: 1px solid blue;
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
                    <UserFunc>
                        <NameDiv>
                            <h1>{this.state.user.name}</h1>
                        </NameDiv>
                        <EditButton>
                            <button onClick={this.toggleNewForm}>Edit Profile</button>
                        </EditButton>
                    </UserFunc>
                </UserInfo>
                {this.state.newForm ? <UpdateUserForm userId={this.props.match.params.id} toggleNewForm={this.toggleNewForm} getCurrentUser={this.getCurrentUser} /> : null}
                <PostContainer>
                    i want the users recent posts here.
                </PostContainer>
                <div>
                    Rating: {this.state.user.rating}
                </div>
                <br />
                <button onClick={this.deleteUser}>Delete User</button>
            </Content>
        );
    }
}

export default UserPage;