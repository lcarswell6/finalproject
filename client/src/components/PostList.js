import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const PostList = (props) => {
const getPost =
<div>
    <h1>Venue Posts</h1>
    {
        props.post.map((post) => {
            return (
                <div>
                    <Link to={`venues/${venue.id}/posts/${post.id}`}>{post.title}</Link>
                </div>
            )
        })
    }

</div>
    return (
        <div>
          {getPost}      
            </div>
        );
}


export default PostList;