import React from 'react';
import algoliasearch from 'algoliasearch';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      coverUrl: '',
      title: '',
      publisher: '',
      city: '',
      country: '',
      language: '',
      publishDate: '',
      genre: '',
      pages: '',
      printRun: ''
    };
  }

  componentDidMount() {
    var client = algoliasearch('5XC2UZIWS0', 'cd170872e1fa42f6c6b5118e2c1f8624');
    var queries = [{
      indexName: 'master-bookshelf',
      query: this.props.params.permalink,
      params: {hitsPerPage: 1},
      restrictSearchableAttributes: 'permalink'
    }];

    client.search(queries)
    .then(function searchSuccess(content) {
      var result = content.results[0].hits[0];

      this.setState({
        author: result.author,
        coverUrl: result.coverUrl,
        title: result.commonTitle,
        publisher: result.publisher,
        city: result.city,
        country: result.country,
        language: result.language,
        publishDate: result.publishDate,
        genre: result.genre,
        pages: result.pages,
        printRun: result.printRun
      });
    }.bind(this))
    .catch(function searchError(err) {
      console.error(err);
    });
  }

  render() {
    var headerStyles = {
      backgroundColor: 'lightgray',
      textAlign: 'left',
      minHeight: '40px',
      display: 'flex',
      alignItems: 'center',
      padding: '10px'
    };

    var bookContainerStyles = {
    };

    var bookDetailStyles = {
      display: 'flex'
    };

    var bookNoteStyles = {
    };

    return (
      <div>
        <div style={headerStyles}>
          <h3>KnowThyShelf</h3>
        </div>
        <div style={bookContainerStyles}>
          <h1>
            {this.state.title}
          </h1>
          <hr />
          <div style={bookDetailStyles}>
            <div>
              <img src={this.state.coverUrl} />
            </div>
            <div style={bookNoteStyles}>
              <ul style={{listStyle: 'none'}}>
                <li>
                  <b>Title:</b> {this.state.title}
                </li>
                <li>
                  <b>Author:</b> {this.state.author}
                </li>
                <li>
                  <b>Publisher:</b> {this.state.publisher}
                </li>
                <li>
                  <b>Location:</b> {this.state.city}, {this.state.country}
                </li>
                <li>
                  <b>Publish Date:</b> {this.state.publishDate}
                </li>
                <li>
                  <b>Language:</b> {this.state.language}
                </li>
                <li>
                  <b>Genre:</b> {this.state.genre}
                </li>
                <li>
                  <b>Pages:</b> {this.state.pages}
                </li>
                <li>
                  <b>Print Run:</b> {this.state.printRun}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Book;
