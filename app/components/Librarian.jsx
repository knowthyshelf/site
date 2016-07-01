import React from 'react';
import instantsearch from 'instantsearch.js';
import bookShelf from './BookShelf.jsx';
import styles from '../styles/librarian.css';

class Librarian extends React.Component {
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
      instantsearch.widgets.stats({
        container: '#stats-container',
        templates: {
          body: "Books on thine shelf: {{nbHits}} "
        }
      })
    );

    this.search.addWidget(
      instantsearch.widgets.bookShelf({
        container: document.querySelector('#book-shelf')
      })
    );

    this.search.start();
  }

  render() {
    return(
      <div className='librarian'>
        <div className='library'>
          <div className='front-desk'>
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

        <div id='book-shelf'></div>
      </div>
    );
  }
}

export default Librarian;
