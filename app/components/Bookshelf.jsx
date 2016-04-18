import React from 'react';
import instantsearch from 'instantsearch.js';

var searchBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px'
}

var bookTemplate = `
<div style='background: url({{imageUrl}}); height: 300px; width: 200px; margin: 3px;'>
  <div style='height: 100%; width: 100%; text-align: center; display: flex; flex-direction: column; justify-content: center; font-family: sans-serif;'>
    <a href="/#/book/{{permalink}}" style=' font-size: 20px;'>{{Original Title}}</a><br /> by {{{Author}}}
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
    });
  }

  componentDidMount() {
    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
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
    this.search.start();
  }

  render() {
    return(
      <div>
        <div id="search-box" style={searchBoxStyles}></div>
        <div id="hits-container"></div>
        <a href="https://www.algolia.com/" style={searchBoxStyles}>Powered by Algolia</a>
      </div>
    );
  }
}

export default Bookshelf;
