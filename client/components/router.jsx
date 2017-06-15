import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import App from './app.jsx';
import Home from './templates/home.jsx';
import Projects from './templates/projects/index.jsx';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <Route path='home' component={ Home } />
      <Route path='projects' component={ Projects } />
    </Route>
  </Router>
)
