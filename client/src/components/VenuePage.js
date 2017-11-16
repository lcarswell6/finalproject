import React, { Component } from 'react';
import axios from 'axios'
import PostList from './PostList'

class VenuePage extends Component {
    state = {
        venue: {},
        posts: []
    }

    componentWillMount () {
        this.getCurrentVenue()
        this.getAllPosts()
    }

    getCurrentVenue = async () => {
        const id = this.props.match.params.id
        const res = await axios.get(`/api/venues/${id}`)
        console.log(res.data)
        this.setState({venue: res.data})
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

                <h1>{this.state.venue.name}</h1>
                <PostList 
                eventId={this.props.match.params.id}
                posts={this.state.posts}/>
            </div>
        );
    }
}

export default VenuePage;