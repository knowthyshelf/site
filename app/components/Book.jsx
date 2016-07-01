import React from 'react';
import BookBox from './BookBox.jsx'
import algoliasearch from 'algoliasearch';
import styles from '../styles/book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    };
  }

  componentDidMount() {
    var client = algoliasearch('5XC2UZIWS0', 'cd170872e1fa42f6c6b5118e2c1f8624');
    var queries = [{
      indexName: 'Books_development',
      query: this.props.params.permalink,
      params: {hitsPerPage: 1},
      restrictSearchableAttributes: 'permalink'
    }];

    client.search(queries)
    .then(function searchSuccess(content) {
      var result = content.results[0].hits[0];
      this.setState({
        book: result
      });
      document.title = this.state.book.commonTitle;
    }.bind(this))
    .catch(function searchError(err) {
      console.error(err);
    });
  }

  render() {
    if (this.state.book) {
      return (
        <BookBox book={this.state.book} />
      );
    } else {
      return(
        <div id='loading-book'></div>
      );
    }
  }
};

export default Book;
