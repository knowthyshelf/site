import React from 'react';
import Bookshelf from '../components/Bookshelf.jsx';
import styles from '../styles/home.css';

class Home extends React.Component{
  render() {
    return(
      <div>
        <div className='hero'>
          {/* on scroll down, have hero h1 snap up to logo spot */}
          <h1>Discover the story behind</h1>
          <h1>your favorite story.</h1>
          <h3>
            Identification points and publishing histories for rare and 
            interesting books.
          </h3>
        </div>
        
        <Bookshelf />
      </div>
    )
  }
}

export default Home;