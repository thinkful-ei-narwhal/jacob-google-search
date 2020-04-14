import React from 'react'
import Book from './Book'


class BookList extends React.Component {


render() {

    const bookComponents = this.props.books.map(book => <Book key = {book.id} title = {book.volumeInfo.title} author = {book.volumeInfo.authors} description = {book.volumeInfo.description} image = {book.volumeInfo.imageLinks.thumbnail} />)

    return(
        <div className = 'books'>
            {bookComponents}
        </div>
    )

}

}


export default BookList