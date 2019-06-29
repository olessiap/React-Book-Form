import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

class Table extends Component {
    render() {
        const { bookData, removeBook } = this.props
        
        return (
            <table>
                <TableHeader />
                <TableBody bookData={bookData} removeBook={removeBook}/>
            </table>
        )
    }
}

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
   const rows = props.bookData.map((row, index) => {
       return(
           <tr key={index}>
               <td>{row.title}</td>
               <td>{row.author}</td>
               <button onClick={() => props.removeBook(index)}>Delete</button>
           </tr>
       )
   })
   return <tbody>{rows}</tbody>
}

export default Table