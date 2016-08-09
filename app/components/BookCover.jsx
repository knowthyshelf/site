import React from 'react';
import BookBox from './BookBox.jsx';
import styles from '../styles/bookcover.css';

class BookCover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let book = this.props.book;
    let isOpened = false
    if (this.props.openBook) {
      isOpened = this.props.openBook.permalink == this.props.book.permalink
    }

    if (isOpened) {
      return(
        <BookBox book={book} />
      );
    } else { 
      return(
        <div className='book-cover'>
          <div className='cover-image'>
            <img id={book.permalink} className='book-cover' src={book.cover_url} />
          </div>
          <div className='result-details'>
            <a href={'/book/' + book.permalink}>{book.title}</a>
            <h5>by {book.author_first} {book.author}</h5>
          </div>
        </div>
      );
    }
  }
}

export default BookCover;