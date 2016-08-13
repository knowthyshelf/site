import React from 'react';
import BookBox from './BookBox.jsx'
import algoliasearch from 'algoliasearch';
import { browserHistory } from 'react-router'
import styles from '../styles/book.css';


class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {}
    };
  }

  componentWillMount() {
    let self = this
    let client = algoliasearch(String(process.env.ALGOLIA_APP_ID), String(process.env.ALGOLIA_API_KEY));
    var queries = [{
      indexName: String(process.env.ALGOLIA_INDEX),
      query: this.props.params.permalink,
      params: {hitsPerPage: 1},
      restrictSearchableAttributes: 'permalink'
    }];

    client.search(queries)
    .then(function(content) {
      var result = content.results[0].hits[0];
      browserHistory.push('/books/'+result.permalink);
      document.title = result.title;
      self.setState({book: result})
    })
  }

  componentWillUnmount() {
    browserHistory.push('/')
    document.title = 'KnowThyShelf';
  }

  render() {
    let book = this.state.book;

    return(
      <div>
        <div>
          <h1>
            {book.title}
          </h1>
          <hr />
          <div className='summary-section'>
            <img src={book.cover_url} />
            <div className='summary-table'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <b>Title:</b> 
                    </td>
                    <td>
                      {book.title}
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
                      {book.publish_date}
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
  }
}


export default Book;
