import React from 'react';
import ReactDOM from 'react-dom';
import instantsearch from 'instantsearch.js';
import styles from '../styles/bookshelf.css';


instantsearch.widgets.bookShelf = bookShelf;

function bookShelf({container}) {
  return {
    getConfiguration: () => ({
    }),

    render({results}) {
      ReactDOM.render(
        <BookShelf
          results={results.hits}
        />,
        container
      );
    }
  };
}

class BookShelf extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='book-shelf'>
        {this.props.results.map(function(result) {
          return <BookCover key={result.objectID} book={result} />;
        })}
      </div>
    );
  }
}

class BookCover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let book = this.props.book;

    return(
      <div className='book-cover'>
        <div className='cover-image'>
          <a href={'/book/' + book.permalink}>
            <img src={book.coverUrl} />
          </a>
        </div>
        <div className='result-details'>
          <a href={'/book/' + book.permalink}>{book.commonTitle}</a>
          <h5>by {book.author}</h5>
        </div>
      </div>
    );
  }
}

export default bookShelf;