import React from 'react';

class BookBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let book = this.props.book;

    return(
      <div className='book-container'>
        <span className='close-book'>Return book to shelf</span>
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
      </div>
    );
  }
}

export default BookBox;