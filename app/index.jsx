import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Home from './views/Home.jsx';
import About from './views/About.jsx';
import FAQList from './views/FAQ.jsx';
import Glossary from './views/Glossary.jsx';

import Librarian from './components/Librarian.jsx';
import Book from './components/Book.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path='books'>
        <Route path=':permalink' component={Librarian} />
      </Route>
    </Route>
    <Route path="/about" component={About} />
    <Route path="/faq" component={FAQList} />
    <Route path="/glossary" component={Glossary} />
    <Route path="/librarian" component={Librarian} />
    <Route path="book">
      <Route path=":permalink" component={Book}/>
    </Route>
  </Router>
), document.getElementById('app'))
