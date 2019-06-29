import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Table from './Table.js'

class App extends Component {
    state = {
        books: [
            {
                title: "book 1",
                author: "author 1"
            },
            {
                title: "book 2",
                author: "author 2"
            },
            {
                title: "book 3",
                author: "author 3"
            },
        ]
    }
    
    removeBook = index => {
        const { books } = this.state

        this.setState({
            books: books.filter((book, i) => {
                return i !== index
            })
        })
    }
    
    render() {
        const { books } = this.state
        return(
            <Table bookData={books} removeBook={this.removeBook}/>
        )
    }
}

export default App