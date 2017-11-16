import React, { Component } from 'react';
import axios from 'axios'
import PostList from './PostList'

class Post extends Component {
    state = {
        post: {}
    }
    componentWillMount() {
        this.getAllPosts()
    }
    getAllPosts = async () => {
        const { venue_id, id} = this.props.match.params
        const response = await axios.get(`/api/venues/${venue_id}/posts/${id}`)
        console.log(response.data)
        this.setState({ post: response.data })
    }

    render() {
        return (
            <div>
                {this.state.post.title}
            </div>
        );
    }
}

export default Post;