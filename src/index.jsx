import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import Home from './home';
import About from './about/index';
import Projects from './projects/index';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render (
  <Router>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='link-projects' component={ Projects } />
      <Route path='link-about' component={ About } />
    </Route>
  </Router>,
  document.getElementById('root')
);
