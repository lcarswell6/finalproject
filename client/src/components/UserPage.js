import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'



const Pic = styled.div`
`

class UserPage extends Component {
    state = {
        user: {},
        posts: []
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



    render() {
        return (
            <div>
                <div>
                    {this.state.user.name}
                    <button>Edit User</button>
                </div>
                <div>
                    Rating: {this.state.user.rating}
                </div>
                <Pic>
                    {this.state.user.image_url}
                </Pic>
            </div>
        );
    }
}

export default UserPage;