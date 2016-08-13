import React from 'react'
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
      space: 'y1iouddx4o4w',
      accessToken: '74f3c6a99d0f8654bdf9c235f75bfe6aca3d30fd18be14072f0f030af322f1a8'
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
        <div className='content'>
          <h1>About KnowThyShelf</h1>
          <p className='description'>
            { this.state.content }
          </p>
        </div>
      </div>
    )
  }
}

export default About;