import React from 'react';
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
      space: 'y1iouddx4o4w',
      accessToken: '74f3c6a99d0f8654bdf9c235f75bfe6aca3d30fd18be14072f0f030af322f1a8'
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
        <div className='content'>
          <h1>Frequently Asked Questions:</h1>
          <div className='faq-list'>
            {this.state.faqList.map(function(faq) {
              return <FAQ key={faq.fields.question} faq={faq}/>
            })}
          </div>
        </div>
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