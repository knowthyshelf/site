import React from 'react';

class FAQList extends React.Component{
  render() {
    let faqList = [
      {
        "question": "What is a first edition?",
        "answer": "To a book collector (and here at Know Thy Shelf), the term “first edition” refers to the earliest printed and published version of a complete work. As soon as a book is reprinted, even if it is virtually identical to the original edition, collectors would not consider it a first edition. Bibliographically, however, the term refers to all copies of a book that are substantially printed from the first setting of type, allowing for minor revisions in typography and text. In this sense, a second or later printing is still considered a first edition and a book would only be labelled a second or later edition if the format changed (as in from hardcover to softcover) or if the text was substantially revised (as when whole chapters or storylines are introduced, omitted, or rearranged). To help clarify, here is a breakdown of some terms commonly associated with first edition books:",
        "examples": [
          ["First Printing or First Impression", "hese terms refer to a copy from the initial manufacturing run of a book. Copies from the first printing are the earliest published versions of the book, coming after the preliminary versions such as uncorrected proofs and advanced review copies. As mentioned, when collectors use the term “first edition” they generally mean the first printing of a first edition. To reduce confusion, some online sellers list their books as 1st/1st to indicate that a book is a both a first printing and a first edition. The print number can be monumentally important in determining the value of a book; all other things being equal a first printing will generally be worth more than a later printing."
          ],
          ["Limited Edition vs Trade Edition", "Publishers will sometimes release a limited or special edition of a book in a small-quantity print run to give it a level of exclusivity. On top of having desirable features such as illustrations, signatures, and being made of higher quality materials, limited edition books are often released slightly earlier than the trade (or widely released) edition. When this is the case, the limited edition version would be considered the true first edition."
          ]
        ]
      },
      {
        "question": "Why are first edition books desirable/valuable?",
        "answer": "<p>First editions are desirable for a number of different reasons. For one thing, the author’s intent is often most realized in a first edition of a book. He or she has spent a great deal of time writing, revising, and (sometimes) designing the book leading up to that moment of publication. Even certain typographical errors that exist in first editions can be seen as a glimpse into the author’s thought process. Later editions with revisions or new forewords, illustrations, or cover designs are often released by publishers without (or with less of) the author’s oversight. Another reason is that a first edition book represents the particular era that it was released. Sometimes when a book comes out it becomes a cultural or historical touchstone or turning point , and it is interesting to possess the physical artifact that marks that change. A book’s release can also dramatically affect the author by making him or her suddenly famous, infamous, or ignored; a first edition might symbolize that moment. Finally, when a book is decades or centuries old, simply handling it can transport the possessor back to that bygone time.</p><p>Beyond these historical and sentimental reasons, there is now a self-propagating reason to collect first edition books: they are valuable because other people deem them valuable. Many collectors only want first editions- not later prints, book club editions, reprints, paperbacks, eBooks, or any other format (even if the actual content is identical). With that in mind, for a book to hold or perhaps even gain some monetary value over time, the first edition is the copy to have. Part of this is due to scarcity (there are less first editions than other versions) but that does not tell the whole story; there are many scarcely available books that are not valuable. The appeal of a true first edition (and the disdain of imitators) is simply an enduring facet of bibliomania that shows no sign of diminishing.</p>"
      }
    ]
    
    return(
      <div id='faqs' className='container'>
        <div className='content'>
          <h1>Frequently Asked Questions:</h1>
          <div className='faq-list'>
            {faqList.map(function(faq) {
              return <FAQ key={faq.question} faq={faq}/>
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
        <h3>{this.props.faq.question}</h3>
        <div dangerouslySetInnerHTML={{__html: this.props.faq.answer}} />
      </div>
    );
  }
}

export default FAQList;