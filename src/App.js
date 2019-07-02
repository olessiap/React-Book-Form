import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Table from './Table.js'
import Form from './Form.js'

class App extends Component {
    state = {
        books: [],
    }
    
    removeBook = index => {
        const { books } = this.state

        this.setState({
            books: books.filter((book, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = book => {
        this.setState({ books: [... this.state.books, book]})
    }
    
    render() {
        const { books } = this.state
        return(
            <div>
                <Table bookData={books} removeBook={this.removeBook}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>     
        )
    }
}

export default App