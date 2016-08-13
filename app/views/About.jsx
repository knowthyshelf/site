import React from 'react'
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import contentful from 'contentful'
import styles from '../styles/about.css'

class About extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  componentDidMount() {
    let self = this
    let client = contentful.createClient({
      space: String(process.env.CONTENTFUL_SPACE),
      accessToken: String(process.env.CONTENTFUL_ACCESS_TOKEN)
    })
    client.getEntry('57iV45OACs6S8yWQK2y2Yy')
    .then(function(entry) {
      self.setState({
        content: entry.fields.content
      })
    })
  }

  render() {
    return(
      <div id='about' className='container'>
        <Nav />
        <div className='content'>
          <h1>About KnowThyShelf</h1>
          <p className='description'>
            { this.state.content }
          </p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;