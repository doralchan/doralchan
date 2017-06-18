import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './styles.scss';

class About extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className='about'>
        <h1>About Page</h1>
       <Link to="/">Back Home</Link>
      </div>
   );
  }
}

export default About
