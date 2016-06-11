import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Home from './views/Home.jsx';
import About from './views/About.jsx'
import Bookshelf from './components/Bookshelf.jsx';
import Book from './components/Book.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/bookshelf" component={Bookshelf} />
    <Route path="book">
      <Route path=":permalink" component={Book}/>
    </Route>
  </Router>
), document.getElementById('app'))
