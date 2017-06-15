import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import App from './app';

import Home from './templates/home';
import Projects from './templates/projects';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <Route path='projects' component={ Projects } />
    </Route>
    <Route path='home' component={ Home } />
  </Router>
)
