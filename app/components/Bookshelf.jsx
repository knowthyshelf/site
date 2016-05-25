import React from 'react';
import instantsearch from 'instantsearch.js';
import styles from '../styles/bookshelf.css';

var bookTemplate = `
<div style='background-color: gray; height: 300px; width: 200px; margin: 8px;'>
  <div style='height: 100%; width: 100%; text-align: center; display: flex; flex-direction: column; justify-content: center; font-family: sans-serif;'>
    <a href="/book/{{permalink}}" style=' font-size: 20px;'>{{Original Title}}</a><br /> by {{{Author}}}
  </div>
</div>
`;

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    this.search = instantsearch({
      appId: '5XC2UZIWS0',
      apiKey: 'cd170872e1fa42f6c6b5118e2c1f8624',
      indexName: 'master-bookshelf',
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
      <div>
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
