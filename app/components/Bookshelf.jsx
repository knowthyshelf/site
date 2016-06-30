import React from 'react';
import instantsearch from 'instantsearch.js';
import styles from '../styles/bookshelf.css';

var bookTemplate = `
  <div class='cover-image'>
    <a href="/book/{{permalink}}">
      <img src={{coverUrl}} />
    </a>
  </div>
  <div class='result-details'>
    <a href="/book/{{permalink}}" style=' font-size: 20px;'>{{commonTitle}}</a>
    <h5>by {{{author}}}</h5>
  </div>
`;

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    this.search = instantsearch({
      appId: '5XC2UZIWS0',
      apiKey: 'cd170872e1fa42f6c6b5118e2c1f8624',
      indexName: 'Books_development',
      urlSync: true
    });
  }

  componentDidMount() {
    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-input',
        placeholder: 'Search thy shelf'
      })
    );

    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits-container',
        hitsPerPage: 10,
        templates: {
          empty: 'No results',
          item: bookTemplate,
        }
      })
    );
    
    this.search.addWidget(
      instantsearch.widgets.stats({
        container: '#stats-container',
        templates: {
          body: "Books on thine shelf: {{nbHits}} "
        }
      })
    );
    this.search.start();
  }

  render() {
    return(
      <div>
        <div className='bookshelf'>
          <div className='librarian'>
            <div className='title'>
              <h1>Discover the story</h1>
              <h2>behind your favorite story.</h2>
            </div>
            <div className='search-box'>
              <input id="search-input" />
              <div id='stats-container'></div>
            </div>
          </div>
        </div>

        <div className='search-results'>
          <div id="hits-container"></div>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
