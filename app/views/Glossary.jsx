import React from 'react';

class Glossary extends React.Component{
  render() {
    let terms = [
      {
        "term": "Advance Copy",
        "redirect": "",
        "alternates": ["ARC", "ARE"],
        "definition": "a free copy of a new book that the publisher gives out to reviewers, booksellers, or others before the book is printed for mass distribution. It is often referred to as an Advanced Review Copy (ARC) or an Advanced Reader’s Edition (ARE). Despite technically preceding the first printing of a book, advance copies are not alway as desirable to collectors, especially when the advance copy is softcover and the first trade edition is hardcover"
      },
      {
        "term": "Association Copy",
        "redirect": "",
        "alternates": [],
        "definition": "a book with an interesting ownership history or provenance. The book may have been owned by the author, personally given away by the author (see Dedication Copy), or simply owned by a significant person"
      },
    ]

    return(
      <div id='glossarys' className='container'>
        <div className='content'>
          <h1>Glossary</h1>
          <div class='terms-list'>
            {terms.map(function(term) {
              return <Term key={term.term} term={term} />
            })}
          </div>
        </div>
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
        {this.props.term.term} - {this.props.term.definition}
      </div>
    );
  }
}

export default Glossary;