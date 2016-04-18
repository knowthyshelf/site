import React from 'react';
import Bookshelf from '../components/Bookshelf.jsx';

class Home extends React.Component{
  render() {
    let bodyStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
    
    let heroStyles = {
      backgroundColor: 'lightgray',
      width: '100%',
      textAlign: 'center',
    }
    
    return(
      <div ref='body' style={bodyStyles}>
        <div ref='hero' style={heroStyles}>
          {/* on scroll down, have hero h1 snap up to logo spot */}
          <h1>KnowThyShelf</h1>
          <h2>Discover the story behind your favorite story.</h2>
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