import React, { Component } from 'react';
import axios from 'axios'
import PostList from './PostList'

class Post extends Component {
    state = {
        posts: []
    }
    componentWillMount() {
        this.getAllPosts()
    }
    getAllPosts = async () => {
        const response = await axios.get(`/api/venues/:id/posts`)
        console.log(response.data)
        this.setState({ post: response.data })
    }

    render() {
        return (
            <div>
                <PostList post={this.state.post} />
            </div>
        );
    }
}

export default Post;