import React from 'react';
import Nav from '../components/Nav.jsx';
import Bookshelf from '../components/Bookshelf.jsx';

class Home extends React.Component {
  render() {
    return(
      <div id='container'>
        <Nav />
        <Bookshelf />
      </div>
    )
  }
}

export default Home;