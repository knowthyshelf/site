import React from 'react';

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