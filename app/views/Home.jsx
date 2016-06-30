import React from 'react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Bookshelf from '../components/Bookshelf.jsx';

class Home extends React.Component  {
  render() {
    return(
      <div id='container'>
        <Nav />
        <Bookshelf />
        <Footer />
      </div>
    )
  }
}

export default Home;