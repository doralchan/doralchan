import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './styles.scss';

class Projects extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <h1>Projects Page</h1>
        <Link to="/">Back Home</Link>
      </div>
    );
  }
}

export default Projects
