import React from 'react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import contentful from 'contentful'

class FAQList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      faqList: []
    }
  }

  componentDidMount() {
    let self = this
    let client = contentful.createClient({
      space: String(process.env.CONTENTFUL_SPACE),
      accessToken: String(process.env.CONTENTFUL_ACCESS_TOKEN)
    })
    client.getEntries({
      'content_type': 'faqs'
    })
    .then(function(entries) {
      self.setState({faqList: entries.items})
    })
  }

  render() {
    return(
      <div id='faqs' className='container'>
        <Nav />
        <div className='content'>
          <h1>Frequently Asked Questions:</h1>
          <div className='faq-list'>
            {this.state.faqList.map(function(faq) {
              return <FAQ key={faq.fields.question} faq={faq}/>
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='faq' style={{paddingBottom: '20px'}}>
        <h3>{this.props.faq.fields.question}</h3>
        <div dangerouslySetInnerHTML={{__html: this.props.faq.fields.answer}} />
      </div>
    );
  }
}

export default FAQList;