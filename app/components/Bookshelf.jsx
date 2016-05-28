import React from 'react';
import instantsearch from 'instantsearch.js';
import styles from '../styles/bookshelf.css';

var bookTemplate = `
  <a href="/book/{{permalink}}">
    <img src={{coverUrl}} />
  </a>
  <a href="/book/{{permalink}}" style=' font-size: 20px;'>{{commonTitle}}</a>
  <br /> by {{{author}}}
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
        placeholder: 'Search for books on the shelf...'
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
          body: "{{nbHits}} books found"
        }
      })
    );
    this.search.start();
  }

  render() {
    return(
      <div className='search-results'>
        <div className='search-box'>
          <input id="search-input" />
          <span id='stats-container'></span>
        </div>
        <hr />
        <div id="hits-container"></div>
      </div>
    );
  }
}

export default Bookshelf;
