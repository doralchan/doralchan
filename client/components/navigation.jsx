import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  render() {
    return(
      <ul>
        <li><Link to='link-projects'>Projects</Link></li>
        <li><Link to='link-about'>About</Link></li>
      </ul>
    );
  }
}

export default Navigation
