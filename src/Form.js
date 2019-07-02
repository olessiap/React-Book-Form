import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            title: '',
            author: '',
        }

        this.state = this.initialState
    }
    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]:value,
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render() {
        const { title, author } = this.state
        return(
            <form>
                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.handleChange}/>
                <label>Author</label>
                <input 
                    type="text"
                    name="author"
                    value={author}
                    onChange={this.handleChange}/>
                <input 
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form