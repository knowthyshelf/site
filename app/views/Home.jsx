import React from 'react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Librarian from '../components/Librarian.jsx';

class Home extends React.Component  {
  render() {
    return(
      <div id='container'>
        <Nav />
        <Librarian />
        <Footer />
      </div>
    )
  }
}

export default Home;