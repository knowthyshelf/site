import React from 'react';
import createFragment from 'react-addons-create-fragment';
import algoliasearch from 'algoliasearch';
import styles from '../styles/book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      coverUrl: '',
      publisher: '',
      city: '',
      country: '',
      language: '',
      publishDate: '',
      genre: '',
      pages: '',
      printRun: '',
      permalink: '',
      summary: '',
      sections: []
    };
  }

  componentWillMount() {
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
        title: result.commonTitle,
        author: result.author,
        coverUrl: result.coverUrl,
        publisher: result.publisher,
        city: result.city,
        country: result.country,
        language: result.language,
        publishDate: result.publishDate,
        genre: result.genre,
        pages: result.pages,
        printRun: result.printRun,
        permalink: result.permalink,
        summary: result.summary,
        sections: result.sections.map((section) => {return createFragment(section);})
      });
      document.title = this.state.title;
      
    }.bind(this))
    .catch(function searchError(err) {
      console.error(err);
    });
  }
  
  
  
  

  render() {

    return (
      <div className='book-container'>
        <div>
          <h1>
            {this.state.title}
          </h1>
          <hr />
          
          <div className='summary-section'>
            <img src={this.state.coverUrl} />
            <div className='summary-table'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <b>Title:</b> 
                    </td>
                    <td>
                      {this.state.title}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Author:</b> 
                    </td>
                    <td>
                      <a href={"/bookshelf?q=" + this.state.author}>{this.state.author}</a>  
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Publisher:</b> 
                    </td>
                    <td>
                      <a href={"/bookshelf?q=" + this.state.publisher}>{this.state.publisher}</a> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Location:</b> 
                    </td>
                    <td>
                      {this.state.city}, {this.state.country}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Publish Date:</b> 
                    </td>
                    <td>
                      {this.state.publishDate}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Language:</b> 
                    </td>
                    <td>
                      <a href={"/bookshelf?q=" + this.state.language}>{this.state.language}</a> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Genre:</b> 
                    </td>
                    <td>
                      <a href={"/bookshelf?q=" + this.state.genre}>{this.state.genre}</a> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Pages:</b> 
                    </td>
                    <td>
                      {this.state.pages}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Print Run:</b> 
                    </td>
                    <td>
                      {this.state.printRun}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class='nav-links'>
            Jump to:&nbsp;  
            {this.state.sections.sort(function(a, b) { return a[1] > b[1] ? 1 : -1; }).map(function(section) {
              return(<span><a key={section[0]} href={'#'+section[1].replace(/\s+/g, '-').toLowerCase()}>{section[1]}</a> | </span>);
            })}
          </div>
          {/* TODO: turn this into a contentSection component */}
          <div>
            {this.state.sections.sort(function(a, b) { return a[1] > b[1] ? 1 : -1; }).map(function(section) {
              return(<div key={section[0]} className='content-section'><a name={section[1].replace(/\s+/g, '-').toLowerCase()} /><h3>{section[1]}</h3><hr /><div dangerouslySetInnerHTML={{__html: section[2]}} /></div>);
             })}
          </div>
        </div>
      </div>
    );
  }
};

export default Book;
