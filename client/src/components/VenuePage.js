import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import PostList from './PostList'
import NavBar from './NavBar'
import UpdateVenueForm from './UpdateVenueForm'
import { Redirect } from 'react-router-dom'

const Content = styled.div`
font-family: 'Spectral SC', serif;
margin-top:75px;
`
const Descrip = styled.div`
border: 1px solid red;
padding: 10px;
`
const Name = styled.div`
font-size: 40px;
font-weight: bold;
color: red;
`
const Address = styled.div`
`
const ButtonDiv = styled.div`
display:flex;
justify-content: center;
border: 1px solid red;

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
    cursor:pointer;
}
align-self:center;
`

class VenuePage extends Component {
    state = {
        venue: {},
        posts: [],
        newForm: false,
        // redirect: false
    }

    componentWillMount() {
        this.getCurrentVenue()
        this.getAllPosts()
    }

    getCurrentVenue = async () => {
        const id = this.props.match.params.id
        const res = await axios.get(`/api/venues/${id}`)
        console.log(res.data)
        this.setState({ venue: res.data })
    }
    getAllPosts = async () => {
        const id = this.props.match.params.id
        const response = await axios.get(`/api/venues/${id}/posts`)
        console.log(response.data)
        this.setState({ posts: response.data })
    }
    toggleNewForm = () => {
        this.setState({ newForm: !this.state.newForm })
    }
    deleteVenue = async () => {
        const id = this.props.match.params.id
        const res = await axios.delete(`/api/venues/${id}`)
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={`/venues`} />
        }

        return (
            <Content>
                <Name>
                    <h1>{this.state.venue.name}</h1>
                </Name>
                <Address>{this.state.venue.address}</Address>
                <Descrip>{this.state.venue.description}</Descrip>
                <PostList
                    eventId={this.props.match.params.id}
                    posts={this.state.posts} />
                <ButtonDiv>
                    <EditButton>
                        <button onClick={this.toggleNewForm}>Edit Venue</button>
                    </EditButton>
                    {this.state.newForm ? <UpdateVenueForm venueId={this.props.match.params.id} toggleNewForm={this.toggleNewForm} getCurrentVenue={this.getCurrentVenue} /> : null}
                    <DeleteButton>
                        <button onClick={this.deleteVenue}>Delete Venue</button>
                    </DeleteButton>
                </ButtonDiv>
            </Content>
        );
    }
}

export default VenuePage;