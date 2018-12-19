import React, { Component } from 'react';
import '../css/Posts.css'

class Posts extends Component {         //componente dei posts
    constructor(props) {
        super(props)

        this.state = {              //array dove salvo i dati che arrivano dalla fetch
            posts: []
        }
    }

    componentDidMount() {               //esegue la funzione della fetch quando si carica il DOM
        this.getPosts()
    }

    getPosts() {                             //funzione che esegue la fetch
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())      //spacchetto il primo livello dei dati
            .then(res => this.setState({ posts: res }))  //salvo i dati nel mio array
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => {  //stampo i dati dell'array con il map
                    return (
                        item.id < 10 ?      //condizione che stampa 9 elementi
                            <div className="posts" key={item.id}>
                            <div className="user">
                                <img src={item.thumbnailUrl} alt="thumbnailUrl" className="thumbnail" />
                                <div className="albumID">Album ID: {item.albumId}</div>
                            </div>
                                <div className="title">{item.title}</div>
                                <img src={item.url} alt="url" className="url" />
                            </div>
                            : null    //fine condizione(ternario)
                    )
                })}
            </div>
        )
    }
}

export default Posts;
