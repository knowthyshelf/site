import React from 'react';
import styles from '../styles/nav.css';

class Nav extends React.Component {
  render() {
    return(
      <nav>
        <div className='nav-elements'>
          <a href="/">KNOWTHYSHELF</a>
          <p>
            Identification points and publishing histories for rare and 
            interesting books.
          </p>
        </div>
      </nav>
    )
  }
}

export default Nav;