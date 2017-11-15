import React from 'react';

const PostList = (props) => {
    return(
        <div>
            <h1>Posts</h1>
            {
                props.songs.map((song)=> {
                    return (
                        <div>
                            <h2>{post.title}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}