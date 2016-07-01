import React from 'react';
import ReactDOM from 'react-dom';
import instantsearch from 'instantsearch.js';
import BookCover from './BookCover.jsx';
import BookBox from './BookBox.jsx';
import styles from '../styles/bookshelf.css';


instantsearch.widgets.bookShelf = bookShelf;

function bookShelf({container}) {
  return {
    getConfiguration: () => ({
    }),

    render({results}) {
      ReactDOM.render(
        <BookShelf
          books={results.hits}
        />,
        container
      );
    }
  };
}

class BookShelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openBook: null
    }
    this.handleBooks = this.handleBooks.bind(this);
  }

  handleBooks (event) {
    console.log(event.target.className)
    switch(event.target.className) {
      case 'book-cover':
        let books = this.props.books
        let permalink = event.target.id;
        function findBook(book) { 
          return book.permalink === permalink;
        }
        this.setState({openBook: books.find(findBook)});
        break;
      case 'close-book':
        console.log('why');
        this.setState({openBook: null});
    }
  }

  render() {
    if (this.state.openBook) {
      return(
        <div className='book-shelf' onClick={this.handleBooks}>
          <BookBox book={this.state.openBook} />
        </div>
      );
    } else {
      return(
        <div className='book-shelf' onClick={this.handleBooks}>
          {this.props.books.map(function(book) {
            return <BookCover key={book.objectID} book={book}/>;
          })}
        </div>
      );
    }
  }
}

export default bookShelf;