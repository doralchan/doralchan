import React from 'react';
import { Link } from 'react-router';

import './styles.scss';

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Link to='link-home'>Home</Link>
        <Link to='link-skillset'>Skillset</Link>
        <Link to='link-projects'>Projects</Link>
        <Link to='link-processes'>Processes</Link>
        <Link to='link-contact'>Contact</Link>
      </div>
    );
  }
}

export default Navigation
