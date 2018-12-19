import React, { Component } from 'react';
import '../css/Posts.css'

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts() {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(res => this.setState({ posts: res }))
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => {
                    return (
                        item.id < 10 ?
                            <div className="posts" key={item.id}>
                            <div className="user">
                                <img src={item.thumbnailUrl} alt="thumbnailUrl" className="thumbnail" />
                                <div className="albumID">Album ID: {item.albumId}</div>
                            </div>
                                <div className="title">{item.title}</div>
                                <img src={item.url} alt="url" className="url" />
                            </div>
                            : null
                    )
                })}
            </div>
        )
    }
}

export default Posts;
