import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import PostList from './PostList'
import NavBar from './NavBar'

const Descrip = styled.div`
border: 1px solid red;
padding: 10px;
`
const Name = styled.div`
font-size: 40px;
font-weight: bold;
color: red;
`

class VenuePage extends Component {
    state = {
        venue: {},
        posts: []
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

    render() {

        return (
            <div>

                <Name>{this.state.venue.name}</Name>
                <Descrip>{this.state.venue.description}</Descrip>
                <PostList
                    eventId={this.props.match.params.id}
                    posts={this.state.posts} />
            </div>
        );
    }
}

export default VenuePage;