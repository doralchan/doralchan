import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

import App from './app.jsx';
import Home from './components/home.jsx';
import About from './components/about/index.jsx';
import Projects from './components/projects/index.jsx';

export default (
  <Router>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='link-projects' component={ Projects } />
      <Route path='link-about' component={ About } />
    </Route>
  </Router>
);
