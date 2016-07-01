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
    this.state = {
      open: false
    };
  }

  openBook() {
    this.setState({open: true})
  }

  closeBook() {
    this.setState({open: false})
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
          <a onClick={this.closeBook.bind(this)} href='#'>{book.commonTitle}</a>
          <h5>by {book.author}</h5>
        </div>

        <BookBox book={book} open={this.state.open}/>
      </div>
    );
  }
}

class BookBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let book = this.props.book;
    if(this.props.open == true) {
      return(
        <div className='book-container'>
          <div>
            <h1>
              {book.commonTitle}
            </h1>
            <hr />
            
            <div className='summary-section'>
              <img src={book.coverUrl} />
              <div className='summary-table'>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Title:</b> 
                      </td>
                      <td>
                        {book.commonTitle}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Author:</b> 
                      </td>
                      <td>
                        <a href={"/bookshelf?q=" + book.author}>{book.author}</a>  
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Publisher:</b> 
                      </td>
                      <td>
                        <a href={"/bookshelf?q=" + book.publisher}>{book.publisher}</a> 
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Location:</b> 
                      </td>
                      <td>
                        {book.city}, {book.country}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Publish Date:</b> 
                      </td>
                      <td>
                        {book.publishDate}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Language:</b> 
                      </td>
                      <td>
                        <a href={"/bookshelf?q=" + book.language}>{book.language}</a> 
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Genre:</b> 
                      </td>
                      <td>
                        <a href={"/bookshelf?q=" + book.genre}>{book.genre}</a> 
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pages:</b> 
                      </td>
                      <td>
                        {book.pages}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Print Run:</b> 
                      </td>
                      <td>
                        {book.printRun}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        null
      );
    }
  }
}

export default bookShelf;