import React from 'react';
import Bookshelf from '../components/Bookshelf.jsx';

class Home extends React.Component{
  render() {
    return(
      <div>
        <h1>Let's do this</h1>
        <Bookshelf />
      </div>
    )
  }
}

export default Home;