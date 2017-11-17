import React, { Component } from 'react';
import axios from 'axios'
import PostList from './PostList'
import styled from 'styled-components'

const Content = styled.div`
margin-top: 75px;
font-family: 'Spectral SC', serif;
`

const Wiw = styled.div`
font-family: 'Spectral SC', serif;
font-size: 40px;
font-weight: bold;
font-style: italic;
background-image: linear-gradient(white, grey); 
`

const Pic = styled.div`
display:flex;
justify-content:center;
align-items: center;
overflow:hidden;
img {
    flex-shrink: 0;
    max-width: 300px;
    max-width: 300px;
    /* min-width:100%;
    min-height:100%; */
};
`

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
            <Content>
                <h3>
                    {this.state.post.title}
                </h3>
                <h4>
                    Event: {this.state.post.event}
                </h4>
                <Wiw>
                    What I wore:
                </Wiw>
                <Pic>
                    <img src={this.state.post.image_url} />
                </Pic>
                <div>
                    {this.state.post.description}
                </div>
                <div>
                    Rating:{this.state.post.rating}
                </div>
            </Content>
        );
    }
}

export default Post;