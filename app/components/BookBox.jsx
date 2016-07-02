import React from 'react';
import { browserHistory } from 'react-router'


class BookBox extends React.Component {
  constructor(props) {
    super(props);
    browserHistory.push('/books/'+this.props.book.permalink);
    document.title = this.props.book.commonTitle;
  }

  componentWillUnmount() {
    browserHistory.push('/')
    document.title = 'KnowThyShelf';
  }

  render() {
    let book = this.props.book;

    return(
      <div>
        <div>
          <h1>
            {book.commonTitle}
          </h1>
          <hr />
          <div className='summary-section'>
            <img src={book.coverUrl} />
            <div className='summary-table'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <b>Title:</b> 
                    </td>
                    <td>
                      {book.commonTitle}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Author:</b> 
                    </td>
                    <td>
                      <a href={"/bookshelf?q=" + book.author}>{book.author}</a>  
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Publisher:</b> 
                    </td>
                    <td>
                      <a href={"/bookshelf?q=" + book.publisher}>{book.publisher}</a> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Location:</b> 
                    </td>
                    <td>
                      {book.city}, {book.country}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Publish Date:</b> 
                    </td>
                    <td>
                      {book.publishDate}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Language:</b> 
                    </td>
                    <td>
                      <a href={"/bookshelf?q=" + book.language}>{book.language}</a> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Genre:</b> 
                    </td>
                    <td>
                      <a href={"/bookshelf?q=" + book.genre}>{book.genre}</a> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Pages:</b> 
                    </td>
                    <td>
                      {book.pages}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Print Run:</b> 
                    </td>
                    <td>
                      {book.printRun}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class='nav-sections'>
          <ContentLinks sections={book.sections.sort(function(a, b) { return a[1] > b[1] ? 1 : -1; })} />
          {book.sections.sort(function(a, b) { return a[1] > b[1] ? 1 : -1; }).map(function(section) {
            return(
              <ContentSection 
                section={section}
              />
            );
          })}
        </div>

      </div>
    );
  }
}

class ContentLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div class='nav-link'>
        Jump to:&nbsp; 
        {this.props.sections.map(function(section) {
          return(
            <span><a href={'#'+section.title.replace(/\s+/g, '-').toLowerCase()}>{section.title}</a> | </span>
          )
        })}
      </div>
    );
  }
}

class ContentSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let section = this.props.section;

    return(
      <div className='content-section'>
        <a name={section.title.replace(/\s+/g, '-').toLowerCase()} />
        <h3>{section.title}</h3>
        <hr />
        <div dangerouslySetInnerHTML={{__html: section.content}} />
      </div>

    );
  }
}

export default BookBox;