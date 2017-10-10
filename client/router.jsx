import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import App from './app.jsx';
import Home from './components/home/index.jsx';

export default (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
    </Route>
  </Router>
);
