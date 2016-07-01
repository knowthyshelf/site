import React from 'react';
import styles from '../styles/bookcover.css';

class BookCover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let book = this.props.book;

    return(
      <div className='book-cover'>
        <div className='cover-image'>
          <img id={book.permalink} className='book-cover' src={book.coverUrl} />
        </div>
        <div className='result-details'>
          <a href={'/book/' + book.permalink}>{book.commonTitle}</a>
          <h5>by {book.author}</h5>
        </div>
      </div>
    );
  }
}

export default BookCover;