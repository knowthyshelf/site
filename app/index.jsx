import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Home from './views/Home.jsx';
import About from './views/About.jsx'
import Librarian from './components/Librarian.jsx';
import Book from './components/Book.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/librarian" component={Librarian} />
    <Route path="book">
      <Route path=":permalink" component={Book}/>
    </Route>
  </Router>
), document.getElementById('app'))
