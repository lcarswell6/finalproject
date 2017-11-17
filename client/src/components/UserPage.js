import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import UpdateUserForm from './UpdateUserForm'
import { Redirect } from 'react-router-dom'

const Content = styled.div`
font-family: 'Spectral SC', serif;
height: 100vh;
width: 100%;
margin-top:75px;
background-color: #eff4f9;
`

const UserInfo = styled.div`
font-family: 'Spectral SC', serif;
display: flex;
height: 250px;
width: 100%;
padding: 0 0 0 50px;
background-color: #eff4f9;


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
justify-content: space-around;
`

const EditButton = styled.div`
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
const DeleteButton = styled.div`
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
    cursor: pointer;
}
align-self: center;
`

const RateDiv = styled.div`

`

const NameDiv = styled.div`
align-self: center;
margin: 0 0 75px 75px;
`

const PostContainer = styled.div`
display: flex;
align-items: baseline;
justify-content: center;
`

const PicPostContainer = styled.div`

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
                    <RateDiv>
                        Rating: {this.state.user.rating}
                    </RateDiv>
                    <UserFunc>
                        <NameDiv>
                            <h1>{this.state.user.name}</h1>
                        </NameDiv>
                        <EditButton>
                            <button onClick={this.toggleNewForm}>Edit Profile</button>
                        </EditButton>
                        <DeleteButton>
                            <button onClick={this.deleteUser}>Delete User</button>
                        </DeleteButton>
                    </UserFunc>
                </UserInfo>
                {this.state.newForm ? <UpdateUserForm userId={this.props.match.params.id} toggleNewForm={this.toggleNewForm} getCurrentUser={this.getCurrentUser} /> : null}

                <hr/>
                <PostContainer>
                    I want the users recent posts here.
                </PostContainer>
                <br />
            </Content>
        );
    }
}

export default UserPage;