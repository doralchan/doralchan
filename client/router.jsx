import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import App from './app.jsx';
import Home from './components/home/index.jsx';
import Toolkit from './components/toolkit/index.jsx';
import Projects from './components/projects/index.jsx';
import Processes from './components/processes/index.jsx';
import Contact from './components/contact/index.jsx';

export default (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='link-toolkit' component={ Toolkit } />
      <Route path='link-projects' component={ Projects } />
      <Route path='link-processes' component={ Processes } />
      <Route path='link-contact' component={ Contact } />
    </Route>
  </Router>
);
