import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import UpdateUserForm from './UpdateUserForm'
import { Redirect } from 'react-router-dom'

const Content = styled.div`
height: 100vh;
width: 100%;
border: 1px solid green;
margin-top:75px;
background-color: #eff4f9;

`
const UserInfo = styled.div`
display: flex;
height: 250px;
width: 100%;
border: 1px solid yellow;
padding: 0 0 0 50px;
background-color: #eff4f9;
border: 5px solid blue; 

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


const NameDiv = styled.div`
align-self: center;
margin: 0 0 75px 25px;


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
                        <DeleteButton>
                            <button onClick={this.deleteUser}>Delete User</button>
                        </DeleteButton>
                    </UserFunc>
                </UserInfo>
                {this.state.newForm ? <UpdateUserForm userId={this.props.match.params.id} toggleNewForm={this.toggleNewForm} getCurrentUser={this.getCurrentUser} /> : null}
                <PostContainer>
                    I want the users recent posts here.
                </PostContainer>
                <div>
                    Rating: {this.state.user.rating}
                </div>
                <br />
            </Content>
        );
    }
}

export default UserPage;