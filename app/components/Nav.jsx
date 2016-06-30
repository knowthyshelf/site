import React from 'react';
import styles from '../styles/nav.css';

class Nav extends React.Component {
  render() {
    return(
      <nav>
        <div className='nav-elements'>
          <p>
            Identification points and publishing histories for rare and 
            interesting books.
          </p>
          <a href="/">KNOWTHYSHELF</a>
        </div>
      </nav>
    )
  }
}

export default Nav;