import React from 'react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import contentful from 'contentful'

class Glossary extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      termsList: []
    }
  }

  componentDidMount() {
    let self = this
    let client = contentful.createClient({
      space: String(process.env.CONTENTFUL_SPACE),
      accessToken: String(process.env.CONTENTFUL_ACCESS_TOKEN)
    })

    client.getEntries({
      'content_type': 'glossary',
      'order': 'fields.permalink'
    })
    .then(function(entries) {
      self.setState({termsList: entries.items})
    })
  }

  render() {
    return(
      <div id='glossary' className='container'>
        <Nav />
        <div className='content'>
          <h1>Glossary</h1>
          <div class='terms-list'>
            {this.state.termsList.map(function(term) {
              return <Term key={term.fields.term} term={term} />
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

class Term extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className='term' style={{paddingBottom: '20px'}}>
        {this.props.term.fields.term} - {this.props.term.fields.definition}
      </div>
    );
  }
}

export default Glossary;