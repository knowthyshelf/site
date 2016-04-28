import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Home from './views/Home.jsx';
import Bookshelf from './components/Bookshelf.jsx';
import Book from './components/Book';

render((
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='books-the-hobbit' component={Book} />
  </Router>
), document.getElementById('app'));