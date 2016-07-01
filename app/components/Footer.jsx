import React from 'react';
import styles from '../styles/footer.css';

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <p>
          Disclaimer: Though we try our best to ensure accuracy, we cannot 
          guarantee that the information listed here is 100% correct.
        </p>
        <br />
        <a href='about'>About</a> | <a href='about'>F.A.Q.</a> | <a href='about'>Glossary</a> | <a href='about'>Contact</a>
        <br />
        <br />
        &copy; { new Date().getFullYear() } KnowThyShelf
      </footer>
    )
  }
}

export default Footer;