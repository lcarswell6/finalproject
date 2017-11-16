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
        const { venue_id, id } = this.props.match.params
        const response = await axios.get(`/api/venues/${venue_id}/posts/${id}`)
        console.log(response.data)
        this.setState({ post: response.data })
    }

    render() {
        return (
            <div>
                <h3>
                    {this.state.post.title}
                </h3>
                <h4>
                    Event: {this.state.post.event}
                </h4>
                <div>
                    {this.state.post.description}
                </div>
            </div>
        );
    }
}

export default Post;