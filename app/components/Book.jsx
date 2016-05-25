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
    }.bind(this))
    .catch(function searchError(err) {
      console.error(err);
    });
  }
  
  

  render() {

    return (
      <div className='container'>
        <div>
          <h1>
            {this.state.title}
          </h1>
          <hr />
          
          <div className='summary-section'>
            <div>
              <img src={this.state.coverUrl} />
            </div>
            <div className='details'>
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
                      {this.state.author}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Publisher:</b> 
                    </td>
                    <td>
                      {this.state.publisher}
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
                      {this.state.language}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Genre:</b> 
                    </td>
                    <td>
                      {this.state.genre}
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
            Jump to: <a href='#publication-history'>Publication History </a> | <a href='#first-identification-points'>First Edition Identification Points</a> | <a href='#later-identification-points'>Later Edition Identification Points</a>
          </div>
          {/* TODO: turn this into a contentSection component */}
          <div>
            {this.state.sections.reverse().map(function(section) {
              return(<div key={section[0]} className='content-section'><h3>{section[1]}</h3><hr /><div dangerouslySetInnerHTML={{__html: section[2]}} /></div>);
             })}
          </div>
        </div>
      </div>
    );
  }
};

export default Book;
