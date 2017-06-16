import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import App from './app';
import Home from './exercises'
import Project from './exercises/project';

export default (
  <Router history={browserHistory}>
    <Route path='/exercises' component={ Home } />
    <Route path='/' component={ App }>
      <Route path='exercises' component={ Home } />
      <Route path='project' component={ Project } />
    </Route>
  </Router>
)
