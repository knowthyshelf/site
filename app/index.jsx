import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Home from './views/Home.jsx';
import Bookshelf from './components/Bookshelf.jsx';

render((
  <Router>
    <Route path='/' component={Home} />
    <Route path='bookshelf' component={Bookshelf} />
  </Router>
), document.getElementById('app'));