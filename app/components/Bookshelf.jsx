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
    this.handleShelfClicks = this.handleShelfClicks.bind(this);
  }

  componentWillMount() {
    if (document.URL.includes('books')) {
      let url = document.URL;
      let permalink = url.substr(url.lastIndexOf('/') + 1)
      function findBook(book) { 
        return book.permalink === permalink;
      }
      this.setState({openBook: this.props.books.find(findBook)});
    }
  }

  handleShelfClicks (event) {
    switch(event.target.className) {
      case 'book-cover':
        let permalink = event.target.id;
        function findBook(book) { 
          return book.permalink === permalink;
        }
        this.setState({openBook: this.props.books.find(findBook)});
        break;
      case 'close-book':
        this.setState({openBook: null});
    }
  }


  render() {
    let books = this.props.books
    var bookCovers = [];

    for (var i = 0; i < books.length; i++) {
      bookCovers.push(<BookCover book={books[i]} openBook={this.state.openBook} />);
    }

    if(this.state.openBook) {
      return(
        <div className='book-container' onClick={this.handleShelfClicks}>
          <span className='close-book'>Return book to shelf</span>
          <BookCover book={this.state.openBook} openBook={this.state.openBook} />
        </div>
      );
    } else {
      return (
        <div className='book-shelf' onClick={this.handleShelfClicks}>
          {bookCovers}
        </div>
      );
    }

  }
}

export default bookShelf;